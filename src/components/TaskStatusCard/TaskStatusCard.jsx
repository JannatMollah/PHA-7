import React from 'react';

const TaskStatusCard = ({taskStatus,resolvedTask,setResolvedTask}) => {
    const handleResolvedTask = (task) => {
        setResolvedTask([...resolvedTask,task]);
    }

    return (
        <div>
            <h1 className="font-semibold text-xl text-[#34485A] mt-10">Task Status</h1>
            <div className="my-3 grid grid-cols-1">
                {
                    taskStatus.map(task =>
                        <div className="card w-90 bg-base-100 card-sm shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{task.title}</h2>
                                <div className="mt-1">
                                    <button className="btn bg-[#02A53B] text-white btn-block" onClick={()=>handleResolvedTask(task)}>Complete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TaskStatusCard;