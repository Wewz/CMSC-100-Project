import React, {useState} from 'react';

import { FaUsers } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";

import { Link } from 'react-router-dom';

const DashBoard = () => {

    return(
        <div className="flex w-[80%] flex-col p-28">

            <div className="flex items-center border-b border-[#2D4944] border-opacity-40 mb-14">
                <h1 className="text-[#a2a2a2] p-4 font-bold text-3xl">Dashboard
                </h1>
            </div>


            <div className="flex items-center gap-4">
                <div className="border border-[#2D4944] border-opacity-40 p-10 rounded-2xl flex flex-col justify-center items-center text-center">

                    <div className="text-[#2D4944]">
                        <FaUsers size={100} />
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#2D4944] font-semibold text-2xl">User List</h1>
                    </div>
                    <Link to="/user-list" className="flex"> 
                        <button className="bg-[#2D4944] text-white text-sm font-medium p-2 rounded-2xl w-60">
                            Review
                        </button>
                    </Link>
                </div>


                <div className="border border-[#2D4944] border-opacity-40 p-10 rounded-2xl flex flex-col justify-center items-center text-center">

                    <div className="text-[#2D4944]">
                        <TbReportSearch size={100} />
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#2D4944] font-semibold text-2xl">Sales Report</h1>
                    </div>
                    <Link to="/sales-report" className="flex">
                        <button className="bg-[#2D4944] text-white text-sm font-medium p-2 rounded-2xl w-60">
                            Review
                        </button>
                    </Link>
                </div>

                <div className="border border-[#2D4944] border-opacity-40 p-10 rounded-2xl flex flex-col justify-center items-center text-center">

                    <div className="text-[#2D4944]">
                        <MdProductionQuantityLimits size={100} />
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#2D4944] font-semibold text-2xl">Order List</h1>
                    </div>
                    <Link to="/order-list" className="flex">
                        <button className="bg-[#2D4944] text-white text-sm font-medium p-2 rounded-2xl w-60">
                            Review
                        </button>
                    </Link>
                </div>

            </div>

            
            
            
        </div>
    );
}

export default DashBoard;
