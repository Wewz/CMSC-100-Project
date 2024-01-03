import React, {useState} from 'react';

import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";

import { Link } from 'react-router-dom';

const SideNav = ({setMerchantLogged}) => {
    return(
        <div className={`fixed top-0 right-0 w-[20%] h-full border-l border-[#2D4944] bg-white shadow-2xl flex flex-col items-center`}>

                <div className="w-[60%] text-[#2D4944] pb-6 border-b border-[#2D4944] px-5 text-xl font-bold flex flex-col justify-center text-center items-center my-14">
                    <FaUserCircle size={140} className="" />
                    <h1 className="mt-2">Admin</h1>
                </div>

                <div className="w-full flex flex-col justify-center items-center">

                    <div className="flex w-[50%] text-[#2D4944] hover:bg-[#e0e0e0] mb-5 px-4 py-2 rounded-2xl">
                        <Link to="/" className="flex">  
                            <MdSpaceDashboard size={20} className="mr-2"/>
                            Dashboard
                        </Link>
                    </div>

                    <div className="flex w-[50%] text-[#2D4944] hover:bg-[#e0e0e0] mb-5 px-4 py-2 rounded-2xl">

                        <FaUsers size={20} className="mr-2"/>
                        Users
                    </div>

                    <div className="flex w-[50%] text-[#2D4944] hover:bg-[#e0e0e0] mb-5 px-4 py-2 rounded-2xl">
                        <TbReportSearch size={20} className="mr-2"/>
                        Sales Report
                    </div>

                    <div className="flex w-[50%] text-[#2D4944] hover:bg-[#e0e0e0] mb-5 px-4 py-2 rounded-2xl">

                        <MdProductionQuantityLimits size={20} className="mr-2"/>
                        Transaction
                    </div>

                    <div className="flex w-[50%] text-[#2D4944] hover:bg-[#e0e0e0] mb-5 px-4 py-2 rounded-2xl">
                        <SiProducthunt size={20} className="mr-2"/>
                        Product
                    </div>

                    <div className="absolute bottom-0 right-0 flex w-[50%] text-white bg-[#2D4944] cursor-pointer mb-14 mr-24 p-4 rounded-2xl hover:bg-[#50726b] justify-center items-center"  
                    onClick={(e) => setMerchantLogged(false)}>
                        <RiLogoutBoxRFill size={20} className="mr-2"/>
                        Log Out
                    </div>

                </div>

        </div>
    );
}

export default SideNav;
