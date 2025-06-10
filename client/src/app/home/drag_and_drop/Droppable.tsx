import { useDroppable } from '@dnd-kit/core';
import bg from '../../../assets/box2.svg';

interface DroppableProps {
    id: string;
    children?: React.ReactNode;
}

const Droppable: React.FC<DroppableProps> = ({ id, children }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            style={{
                width: 380,
                height: 380,
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridTemplateRows: 'repeat(12, 1fr)',
                backgroundImage: `url(${bg})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            {[...Array(144)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255,255,255,0.001)',
                        border: '0.05px solid #eee',
                        boxSizing: 'border-box',
                    }}
                />
            ))}
            {children}
        </div>
    );
};

export default Droppable;
