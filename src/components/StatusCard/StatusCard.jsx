import React from 'react';

const StatusCard = () => {
    return (
        <div className="max-w-[1200px] mt-10 mx-auto flex items-center justify-between gap-3">

            <div className="relative text-white rounded-lg w-[590px] h-[200px] flex flex-col items-center justify-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                <div className="absolute inset-0 bg-[url('/vector1.png')] bg-no-repeat transform -scale-x-100"></div>
                <div className="absolute inset-0 bg-[url('/vector1.png')] bg-no-repeat"></div>
                <p>In-Progress</p>
                <span className="font-semibold text-4xl">0</span>
            </div>

            <div className=" relative bg-linear-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg w-[590px] h-[200px] flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[url('/vector1.png')] bg-no-repeat transform -scale-x-100"></div>
                <div className="absolute inset-0 bg-[url('/vector1.png')] bg-no-repeat"></div>
                <p>Resolved</p>
                <span className="font-semibold text-4xl">0</span>
            </div>
        </div>
    );
};

export default StatusCard;