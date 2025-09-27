import React from 'react';
import { toast } from 'react-toastify';

const TaskStatusCard = ({ task, onComplete }) => {
    const handleComplete = () => {
        onComplete(task);
        toast.success(`Task "${task.title}" completed successfully!`);
    };

    return (
        <div className="my-3">
            <div className="card w-90 bg-base-100 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{task.title}</h2>
                    <div className="mt-1">
                        <button 
                            className="btn bg-[#02A53B] text-white btn-block"
                            onClick={handleComplete}
                        >
                            Complete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskStatusCard;