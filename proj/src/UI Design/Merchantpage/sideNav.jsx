import React, {useState} from 'react';

import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';

const SideNav = ({setMerchantLogged}) => {
    return(
        <div className={`fixed top-0 right-0 w-[300px] h-full border-l border-[#2D4944] bg-white shadow-2xl`}>

            <ul className=" mx-[10%] pt-8">
                <li className="p-4 flex justify-center items-center text-center">
                    <div className="w-[85%] text-[#2D4944] pb-6 border-b border-[#2D4944] px-5 text-xl font-bold flex flex-col justify-center text-center items-center">
                        <FaUserCircle size={120} className="" />
                        <h1 className="mt-2">Admin</h1>
                    </div>
                </li>
                <li className="py-4 pl-2 flex ml-8 w-28 text-[#2D4944] hover:text-[#77AC6F]">
                    <Link to="/" className="flex">  
                        <FaHome size={20} className="mr-2"/>
                        Home
                    </Link>
                </li>

                <li className="py-4 pl-2 flex ml-8 w-32 text-[#2D4944] hover:text-[#77AC6F]">

                    <FaCartShopping size={20} className="mr-2"/>
                    Basket
                </li>

                <li className="py-4 pl-2 flex ml-8 w-36 text-[#2D4944] hover:text-[#77AC6F] cursor-pointer"  onClick={(e) => setMerchantLogged(false)}>
                    <RiLogoutBoxRFill size={20} className="mr-2"/>
                    Log Out
                </li>
            </ul>
        </div>
    );
}


export default SideNav;
