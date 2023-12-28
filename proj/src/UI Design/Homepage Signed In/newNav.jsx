import React, {useState, useEffect, Fragment} from 'react';

import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaHistory } from "react-icons/fa";

const NavBarSigned = ({userLogged, setUserLogged, user}) => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    /*
    
                <div className="sm:block md:block lg:block xl:hidden 2xl:hidden items-center" onClick={handleNav}>
                    {!nav ? <TiThMenu className="hidden"/> : <TiThMenu size={30} color='#2D4944' className="hover:bg-[#DCE0DC] rounded-full w-16 h-16 p-4" />}
                </div>

                


                <div className={!nav ? `xl:hidden fixed right-0 top-0 w-[40%] h-full border-l border-[#2D4944] bg-white shadow-2xl` : "hidden"}>

                    <div onClick={handleNav} className="pt-10 flex justify-end mr-16">
                        {!nav ? <TiThMenu size={30} color='#2D4944' className="hover:bg-[#DCE0DC] rounded-full w-16 h-16 p-4"/> : <TiThMenu size={0} />}
                    </div>

                    <ul className=" mx-[10%] pt-8">
                        <li className="p-4 flex justify-center items-center text-center">
                            <div className="w-[85%] text-[#2D4944] pb-6 border-b border-[#2D4944] px-5 text-xl font-bold flex flex-col justify-center text-center items-center">
                                <FaUserCircle size={120} className="" />
                                <h1 className="mt-2">{user.username}</h1>
                            </div>
                        </li>
                        <li className="py-4 pl-2 flex ml-8 w-28 text-[#2D4944] hover:text-[#77AC6F]">
                            <Link to="/" className="flex">  
                                <FaHome size={20} className="mr-2"/>
                                Home
                            </Link>
                        </li>

                        <li className="py-4 pl-2 flex ml-8 w-32 text-[#2D4944] hover:text-[#77AC6F]">

                            <FaHistory size={20} className="mr-2"/>
                            Transaction
                        </li>

                        <li className="py-4 pl-2 flex ml-8 w-36 text-[#2D4944] hover:text-[#77AC6F] cursor-pointer"
                        onClick={(e) => setUserLogged(false)}>
                            <RiLogoutBoxRFill size={20} className="mr-2"/>
                            Log Out
                        </li>

                        <li className="p-4 flex justify-center text-center items-center">
                        <div className="h-16 mt-1 w-full">
                            <button type="submit" className="absolute px-7 py-1 h-12 mr-[150px] text-white bg-[#2D4944] rounded-full 
                                hover:bg-[#77AC6F]">
                                <FaSearch size={15} />
                            </button>

                            <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-xs rounded-full
                                pl-[30%] pr-2 h-12 focus:border-[#507c74] w-full truncate" 
                                placeholder="Search product name..." required />
                        </div>
                        </li>
                    </ul>
                </div>
    */

    return(
        <Fragment>

             <div className="bg-transparent flex justify-between px-[10%] py-3 mx-auto">
                
                <div className="flex items-center">
                    <img className="w-16 h-16" src={require('../assets/DA_Logo.png')} alt="Logo" />

                    <h1 className="text-[#2D4944] p-4 font-bold text-3xl">Cultivate
                        <span className="text-[#77AC6F]">
                            Cart
                        </span>
                    </h1>
                </div>

                <div className="flex">
                    <ul className="flex items-center text-[#2D4944] font-semibold">
                        <li className="p-4 flex hover:text-[#77AC6F]"> 
                            <Link to="/" className="flex">
                                <FaHome size={20} className="mr-2"/> 
                                Home
                            </Link>
                        </li>

                        <li className="p-4 flex hover:text-[#77AC6F]">
                            <Link to="/transaction" className="flex">
                                <FaHistory size={20} className="mr-2"/>
                                Transaction
                            </Link>
                        </li>

                        <li className="p-4 flex hover:text-[#77AC6F] cursor-pointer" onClick={(e) => setUserLogged(false)}>
                            <RiLogoutBoxRFill size={20} className="mr-2"/>
                            Log Out
                        </li>

                        <li className="p-4 flex hover:text-[#77AC6F]">
                            <div className="h-10 px-5 font-bold border rounded-2xl border-[#2D4944] flex justify-center text-center items-center">
                                <h1>{user.username}</h1>
                                <FaUserCircle size={20} className="ml-2" />
                                <GiHamburgerMenu size={20} className="ml-4" />
                            </div>
                        </li>

                    </ul>
                </div>

            </div>

            

        </Fragment>
    );
}

export default NavBarSigned;
