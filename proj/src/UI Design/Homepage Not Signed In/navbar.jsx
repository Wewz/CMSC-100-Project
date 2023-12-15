import React, {useState, Fragment} from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import LogIn from '../log-in/logIn';

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [openLogin, setLogIn] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleLogIn = () => {
        setLogIn(true);
    }

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

                <div className="hidden xl:flex">
                    <ul className="flex items-center text-[#2D4944] font-semibold">
                        <li className="p-4 flex hover:text-[#77AC6F]"> 
                            <Link to="/" className="flex">
                                <FaHome size={20} className="mr-2"/> 
                                Home
                            </Link>
                        </li>

                        <li className="p-4 flex hover:text-[#77AC6F]">
                            <MdProductionQuantityLimits size={20} className="mr-2"/>
                            Product
                        </li>

                        <li className="p-4 flex hover:text-[#77AC6F]">
                            <FaPeopleGroup size={20} className="mr-2"/>
                            About Us
                        </li>

                        <li className="p-4">
                            <Link to="/sign-up">
                                <button className="p-2 w-28 border rounded-lg border-[#2D4944] hover:bg-[#DCE0DC] hover:border-[#DCE0DC]">
                                    Sign Up
                                </button>
                            </Link>
                        </li>

                        <li className="p-4">
                            <button onClick={handleLogIn} className="bg-[#2D4944] w-28 text-white rounded-lg p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Log In</button>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block lg:block xl:hidden 2xl:hidden items-center" onClick={handleNav}>
                    {!nav ? <TiThMenu size={0}/> : <TiThMenu size={30} color='#2D4944' className="hover:bg-[#DCE0DC] rounded-full w-16 h-16 p-4" />}
                </div>

                <div className="md:hidden lg:hidden xl:hidden sm:block 2xl:hidden items-center ml-10" onClick={handleNav}>
                    {!nav ? <TiThMenu size={0}/> : <TiThMenu size={30} color='#2D4944' className="hover:bg-[#DCE0DC] rounded-full w-16 h-16 p-4" />}
                </div>

                <div className={!nav ? `xl:hidden fixed right-0 top-0 w-[40%] h-full border-l border-[#2D4944] bg-white shadow-2xl` : "hidden"}>

                    <div onClick={handleNav} className="pt-10 flex justify-end mr-16">
                        {!nav ? <TiThMenu size={30} color='#2D4944' className="hover:bg-[#DCE0DC] rounded-full w-16 h-16 p-4"/> : <TiThMenu size={0} />}
                    </div>

                    <ul className=" ml-[10%] pt-16">
                        <li className="py-4 pl-2 flex ml-8 w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                            <FaHome size={20} className="mr-2"/>
                            Home
                        </li>

                        <li className="py-4 pl-2 flex ml-8 w-32 text-[#2D4944] hover:text-[#77AC6F]">

                            <MdProductionQuantityLimits size={20} className="mr-2"/>
                            Product
                        </li>

                        <li className="py-4 pl-2 flex ml-8 w-36 text-[#2D4944] hover:text-[#77AC6F]">
                            <FaPeopleGroup size={20} className="mr-2"/>
                            About Us
                        </li>

                        <li className="p-4">
                            <button className="p-2 w-10/12 border rounded-lg border-[#2D4944] hover:bg-[#DCE0DC] hover:border-[#DCE0DC]">Sign Up</button>
                        </li>

                        <li className="p-4">
                            <button onClick={handleLogIn} className="bg-[#2D4944] w-10/12 text-white rounded-lg p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Log In</button>
                        </li>
                    </ul>
                </div>

            </div>

            <LogIn openLogin={openLogin} closeLogin={() => setLogIn(false)} />
        </Fragment>
    );
}

export default NavBar;
