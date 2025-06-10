import { useDraggable } from '@dnd-kit/core';
import { GridItem } from './MainDrag';

const CELL_SIZE = 25;

interface PaletteProps {
    items: GridItem[];
}

const Palette = ({ items }: PaletteProps) => {
    return (
        <div style={{ display: 'flex', gap: 0.1, marginBottom: 16 }}>
            {items.map(item => {
                const { attributes, listeners, setNodeRef } = useDraggable({
                    id: `palette-${item.id}`
                });

                return (
                    <div
                        key={item.id}
                        ref={setNodeRef}
                        {...attributes}
                        {...listeners}
                        style={{
                            border: '2px solid #d1d5db', 
                            borderRadius: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            width: item.width * CELL_SIZE,
                            height: item.height * CELL_SIZE,
                            // border: '1px solid #ccc',
                            position: 'relative',
                            cursor: 'grab',
                        }}
                    >
                        {item.image ? (
                            <img
                                src={item.image}
                                alt="palette-item"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    // objectFit: 'contain',
                                    transform: 'scale(1.2)',
                                    // transformOrigin: 'center center',
                                    // transition: 'transform 0.2s ease'
                                }}
                            />
                        ) : (
                            <div style={{ backgroundColor: '#ddd', width: '100%', height: '100%' }} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Palette;
