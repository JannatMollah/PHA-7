import React, { use } from 'react';
import TicketsCard from '../TicketsCard/TicketsCard';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';
import ResolvedTask from '../ResolvedTaskCard/ResolvedTaskCard';
import ResolvedTaskCard from '../ResolvedTaskCard/ResolvedTaskCard';

const AllTickets = ({ticketsPromise,taskStatus,setTaskStatus,resolvedTask,setResolvedTask}) => {
    const ticketData = use(ticketsPromise);
    return (
        <div className="max-w-[1200px] mx-auto  grid grid-cols-1 md:flex justify-between">
            <div className="max-w-[820px] mx-auto">
                <h1 className="font-semibold text-xl text-[#34485A] mt-10">Customer Tickets</h1>

                <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        ticketData.map(ticket => <TicketsCard ticket={ticket} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask}></TicketsCard>)
                    }
                </div>
            </div>

            <div className="max-w-[380] mx-auto">
                <TaskStatusCard taskStatus={taskStatus} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask}></TaskStatusCard>
                <ResolvedTaskCard resolvedTask={resolvedTask}></ResolvedTaskCard>
            </div>
        </div>

    );
};

export default AllTickets;