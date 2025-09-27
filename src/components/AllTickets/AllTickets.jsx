import React, { use, useState } from 'react';
import TicketsCard from '../TicketsCard/TicketsCard';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';
import ResolvedTaskCard from '../ResolvedTaskCard/ResolvedTaskCard';
import { toast } from 'react-toastify';

const AllTickets = ({ ticketsPromise, setInProgressCount, setResolvedCount }) => {
    const ticketData = use(ticketsPromise);
    const [tasks, setTasks] = useState([...ticketData]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    const handleAddToInProgress = (ticket) => {
        
        if (inProgressTasks.some(task => task.id === ticket.id)) {
            toast.info('Ticket is already in progress!');
            return;
        }
        
       
        if (resolvedTasks.some(task => task.id === ticket.id)) {
            toast.info('Ticket is already resolved!');
            return;
        }

        
        setInProgressTasks(prev => [...prev, ticket]);
        
        toast.success(`Ticket "${ticket.title}" added to In Progress!`);
    };

    const handleTaskComplete = (task) => {
        
        setInProgressTasks(prev => prev.filter(t => t.id !== task.id));
        setResolvedTasks(prev => [...prev, task]);
        setTasks(prev => prev.filter(t => t.id !== task.id)); 
        
        toast.success(`Task "${task.title}" completed successfully!`);
    };

    React.useEffect(() => {
        setInProgressCount(inProgressTasks.length);
        setResolvedCount(resolvedTasks.length);
    }, [inProgressTasks, resolvedTasks, setInProgressCount, setResolvedCount]);

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:flex justify-between">
            <div className="max-w-[820px] mx-auto">
                <h1 className="font-semibold text-xl text-[#34485A] mt-10">Customer Tickets</h1>

                <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tasks.map(ticket => (
                        <TicketsCard 
                            key={ticket.id} 
                            ticket={ticket} 
                            onAddToInProgress={handleAddToInProgress}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-[380] mx-auto">
                <div>
                    <h1 className="font-semibold text-xl text-[#34485A] mt-10">Task Status</h1>
                    {inProgressTasks.map(task => (
                        <TaskStatusCard 
                            key={task.id} 
                            task={task} 
                            onComplete={handleTaskComplete}
                        />
                    ))}
                    {inProgressTasks.length === 0 && (
                        <p className="text-sm text-gray-500 mt-2">No tasks in progress</p>
                    )}
                </div>
                <ResolvedTaskCard resolvedTasks={resolvedTasks}></ResolvedTaskCard>
            </div>
        </div>
    );
};

export default AllTickets;