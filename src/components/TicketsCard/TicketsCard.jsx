import React from 'react';

const TicketsCard = ({ ticket, onAddToInProgress }) => {
    const handleClick = () => {
        onAddToInProgress(ticket);
    };

    return (
        <div 
            className="card w-100 bg-base-100 card-sm shadow-sm cursor-pointer" 
            onClick={handleClick}
        >
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{ticket.title}</h2>
                    <div className={`badge ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : "bg-[#F8F3B9] text-[#9C7700]"}`}>{ticket.status}</div>
                </div>
                <p className="text-sm text-[#627382]">{ticket.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-sm text-[#627382]">#{ticket.id}</p>
                        <p className={`font-medium text-sm ${ticket.priority === "HIGH PRIORITY" ? "text-[#F83044]" : ticket.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{ticket.priority}</p>
                    </div>
                    <div className="flex items-center justify-center text-sm text-[#627382] gap-2">
                        <p>{ticket.customer}</p>
                        <div className="flex items-center gap-1">
                            <span><i className="fa-regular fa-calendar"></i></span>
                            <p>{ticket.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketsCard;