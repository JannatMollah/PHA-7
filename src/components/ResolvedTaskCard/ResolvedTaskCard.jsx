import React from 'react';

const ResolvedTaskCard = ({ resolvedTasks }) => {
    return (
        <div>
            <h1 className="font-semibold text-xl text-[#34485A] mt-10">Resolved Task</h1>
            <div className="my-3 grid grid-cols-1">
                {resolvedTasks.map((task, index) => (
                    <div key={index} className="card w-90 bg-[#E0E7FF] card-sm shadow-sm mb-2">
                        <div className="card-body">
                            <h2 className="card-title">{task.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResolvedTaskCard;