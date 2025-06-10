import { useState } from 'react';
import {
    DndContext,
    DragOverlay,
    type DragEndEvent,
    type DragMoveEvent,
    type DragCancelEvent,
    type DragStartEvent
} from '@dnd-kit/core';
import Droppable from './Droppable';
import Draggable from './Draggable';
import Palette from './Palette';
import candle from '../../../assets/candle.svg';
import hoa from '../../../assets/hoa.png';
import card from '../../../assets/card.png';
import cup from '../../../assets/cup.svg';

const CELL_SIZE = 25;
const GRID_WIDTH = 12;
const GRID_HEIGHT = 12;

export interface GridItem {
    id: string;
    width: number;
    height: number;
    row: number;
    col: number;
    rotation: number;
    image?: string;
}

interface Preview {
    id: string;
    row: number;
    col: number;
    width: number;
    height: number;
}

const paletteItems: GridItem[] = [
    { id: 'item-1', width: 4, height: 4, row: 0, col: 0, rotation: 0, image: candle },
    { id: 'item-2', width: 4, height: 4, row: 0, col: 0, rotation: 0, image: hoa },
    { id: 'item-3', width: 4, height: 4, row: 0, col: 0, rotation: 0, image: card },
    { id: 'item-4', width: 4, height: 4, row: 0, col: 0, rotation: 0, image: cup },
];

const MainDrag = () => {
    const [gridItems, setGridItems] = useState<GridItem[]>([]);
    const [preview, setPreview] = useState<Preview | null>(null);
    const [activeId, setActiveId] = useState<string | null>(null);

    const getBounds = (item: GridItem | Preview) => ({
        left: item.col,
        right: item.col + item.width - 1,
        top: item.row,
        bottom: item.row + item.height - 1
    });

    const overlaps = (a: Preview, b: GridItem) => {
        const A = getBounds(a);
        const B = getBounds(b);
        return (
            A.left <= B.right &&
            A.right >= B.left &&
            A.top <= B.bottom &&
            A.bottom >= B.top
        );
    };

    const isValidPosition = (preview: Preview, ignoreId: string) =>
        preview.col >= 0 &&
        preview.row >= 0 &&
        preview.col + preview.width <= GRID_WIDTH &&
        preview.row + preview.height <= GRID_HEIGHT &&
        !gridItems.some(other => other.id !== ignoreId && overlaps(preview, other));

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragMove = (event: DragMoveEvent) => {
        const { delta, active } = event;
        const id = active.id as string;

        const fromPalette = id.startsWith('palette-');
        const originalId = fromPalette ? id.replace('palette-', '') : id;

        const item = fromPalette
            ? paletteItems.find(it => it.id === originalId)
            : gridItems.find(it => it.id === originalId);

        if (!item || !delta) return;

        const rotated = item.rotation % 180 !== 0;
        const width = rotated ? item.height : item.width;
        const height = rotated ? item.width : item.height;

        const dx = Math.round(delta.x / CELL_SIZE);
        const dy = Math.round(delta.y / CELL_SIZE);

        const newCol = item.col + dx;
        const newRow = item.row + dy;

        const preview = { id, col: newCol, row: newRow, width, height };

        if (isValidPosition(preview, id)) {
            setPreview(preview);
        } else {
            setPreview(null);
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active } = event;
        const id = active.id as string;

        const fromPalette = id.startsWith('palette-');
        const originalId = fromPalette ? id.replace('palette-', '') : id;

        if (!preview) {
            setActiveId(null);
            return;
        }

        if (fromPalette) {
            const base = paletteItems.find(it => it.id === originalId);
            if (!base) return;

            const newItem: GridItem = {
                ...base,
                id: `${originalId}-${Date.now()}`,
                row: preview.row,
                col: preview.col,
                image: base.image
            };

            setGridItems(prev => [...prev, newItem]);
        } else {
            setGridItems(prev =>
                prev.map(it =>
                    it.id === id ? { ...it, row: preview.row, col: preview.col } : it
                )
            );
        }

        setPreview(null);
        setActiveId(null);
    };

    const handleDragCancel = (_: DragCancelEvent) => {
        setPreview(null);
        setActiveId(null);
    };

    const rotateItem = (id: string) => {
        setGridItems(prev =>
            prev.map(item => {
                if (item.id !== id) return item;
                const newRotation = (item.rotation + 90) % 180;

                const rotated = newRotation === 90;
                const newWidth = rotated ? item.height : item.width;
                const newHeight = rotated ? item.width : item.height;

                const clampedCol = Math.min(item.col, GRID_WIDTH - newWidth);
                const clampedRow = Math.min(item.row, GRID_HEIGHT - newHeight);

                const preview: Preview = {
                    id: item.id,
                    col: clampedCol,
                    row: clampedRow,
                    width: newWidth,
                    height: newHeight
                };

                return isValidPosition(preview, item.id)
                    ? { ...item, col: clampedCol, row: clampedRow, rotation: newRotation }
                    : item;
            })
        );
    };

    const activeItem = activeId
        ? activeId.startsWith('palette-')
            ? paletteItems.find(i => i.id === activeId.replace('palette-', ''))
            : gridItems.find(i => i.id === activeId)
        : null;

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <DndContext
                onDragStart={handleDragStart}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <Palette items={paletteItems} />
                <Droppable id="grid">
                    {gridItems.map(item => (
                        <Draggable
                            key={item.id}
                            id={item.id}
                            row={item.row}
                            col={item.col}
                            width={item.width}
                            height={item.height}
                            rotation={item.rotation}
                            image={item.image}
                            onRotate={() => rotateItem(item.id)}
                        />
                    ))}
                    {preview && (
                        <div
                            style={{
                                position: 'absolute',
                                top: preview.row * CELL_SIZE,
                                left: preview.col * CELL_SIZE,
                                width: preview.width * CELL_SIZE,
                                height: preview.height * CELL_SIZE,
                                backgroundColor: isValidPosition(preview, preview.id)
                                    ? 'rgba(0, 128, 255, 0.3)'
                                    : 'rgba(255, 0, 0, 0.2)',
                                border: '1px dashed',
                                borderColor: isValidPosition(preview, preview.id) ? '#0077cc' : 'red',
                                pointerEvents: 'none',
                                zIndex: 50
                            }}
                        />
                    )}
                </Droppable>



                <DragOverlay adjustScale={false}>
                    {activeItem ? (
                        <img
                            src={activeItem.image}
                            alt="drag-preview"
                            style={{
                                width: activeItem.width * CELL_SIZE,
                                height: activeItem.height * CELL_SIZE,
                                objectFit: 'contain',
                                transform: 'scale(1)',
                                pointerEvents: 'none'
                            }}
                        />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default MainDrag;
