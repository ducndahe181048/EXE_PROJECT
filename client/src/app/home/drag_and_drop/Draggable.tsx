import { useDraggable } from '@dnd-kit/core';

interface Props {
    id: string;
    row: number;
    col: number;
    width: number;
    height: number;
    rotation: number;
    image?: string;
    onRotate: () => void;
}

const CELL_SIZE = 25;

const Draggable = ({ id, row, col, width, height, rotation, image, onRotate }: Props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const style: React.CSSProperties = {
        position: 'absolute',
        top: row * CELL_SIZE,
        left: col * CELL_SIZE,
        width: width * CELL_SIZE,
        height: height * CELL_SIZE,
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px) rotate(${rotation}deg)`,
        transformOrigin: 'top left',
        cursor: 'grab',
        zIndex: 100,
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {image ? (
                <img
                    src={image}
                    alt="item"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center top',     
                        // transform: 'translateY(10%)', 
                        transform: 'scale(1.2)',
                        transformOrigin: 'center center',
                        transition: 'transform 0.2s ease',
                        pointerEvents: 'none',    
                    }}
                />
            ) : (
                <div style={{ backgroundColor: 'lightgray', width: '100%', height: '100%' }} />
            )}
            <button
                onClick={onRotate}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    background: 'white',
                    border: '1px solid #ccc',
                    fontSize: 10,
                    padding: '2px',
                    zIndex: 10,
                    cursor: 'pointer'
                }}
            >
                ↻
            </button>
        </div>
    );
};

export default Draggable;
