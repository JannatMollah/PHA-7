import React from 'react';
import cardr from '../../assets/vector1.png'

const StatusCard = () => {
    return (
        <div className="max-w-[1200px] mt-10 mx-auto flex items-center justify-between">
            <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg w-[590px] h-[200px] flex flex-col items-center justify-center">
                <p>In-Progress</p>
                <span className="font-semibold text-4xl">0</span>
            </div>
            <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg w-[590px] h-[200px] flex flex-col items-center justify-center">
                <p>Resolved</p>
                <span className="font-semibold text-4xl">0</span>
            </div>
        </div>
    );
};

export default StatusCard;