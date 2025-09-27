import React from 'react';

const AllTickets = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <h1 className="font-semibold text-xl text-[#34485A] mt-10">Customer Tickets</h1>

            <div className="mt-3">
                <div className="card w-100 bg-base-100 card-sm shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">Login Issues - Can't Access Account</h2>
                            <div className="badge bg-[#B9F8CF] text-[#0B5E06]">Open</div>
                        </div>
                        <p className="text-sm text-[#627382]">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center gap-2">
                                <p className="text-sm text-[#627382]">#1002</p>
                                <p className="font-medium text-sm text-[#F83044]">HIGH PRIORITY</p>
                            </div>
                            <div className="flex items-center justify-center text-sm text-[#627382] gap-2">
                                <p>Sarah Johnson</p>
                                <div className="flex items-center gap-1">
                                    <span><i class="fa-regular fa-calendar"></i></span>
                                    <p>1/16/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTickets;