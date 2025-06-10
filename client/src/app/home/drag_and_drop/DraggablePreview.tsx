import { useDraggable } from '@dnd-kit/core';
import React from 'react';

interface Props {
    id: string;
    width: number;
    height: number;
    rotation: number;
}

const CELL_SIZE = 25;

const DraggablePreview: React.FC<Props> = ({ id, width, height, rotation }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const isRotated = rotation % 180 === 90;
    const w = isRotated ? height : width;
    const h = isRotated ? width : height;

    const style: React.CSSProperties = {
        width: w * CELL_SIZE,
        height: h * CELL_SIZE,
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
        backgroundColor: 'rgba(100, 200, 255, 0.8)',
        border: '1px solid #0077cc',
        cursor: 'grab',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {id}
        </div>
    );
};

export default DraggablePreview;
