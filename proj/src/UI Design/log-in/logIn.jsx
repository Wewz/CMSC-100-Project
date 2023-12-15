import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LogIn = ({openLogin, closeLogin}) => {
    if(!openLogin) return null
    else
        return(
            <div onClick={closeLogin} className="" >

                <div className="fixed inset-0 bg-[#2D4944] bg-opacity-25 flex flex-col justify-center items-center">

                    <div onClick={(e) => e.stopPropagation()} className="w-[40%] h-[550px] hidden xl:block 2xl:block bg-white rounded-3xl drop-shadow-3xl">

                        <div className="text-[#c8cbc8] hover:text-[#2D4944] flex justify-end text-right mt-4 mr-4">
                            <FaWindowClose size={50} onClick={closeLogin} />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h1 className="text-[#2D4944] p-4 font-bold text-5xl">Cultivate
                                <span className="text-[#77AC6F]">Cart</span>
                            </h1>

                            <div className="bg-white h-16 mt-14 flex text-center items-center w-[60%] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <FaUser size={25} />
                                </div>

                                <input type="text" id="search" class="text-[#2D4944] rounded-full border border-[#2D4944]
                                pl-36 w-full h-full focus:border-[#507c74]" 
                                placeholder="Username" required />
                            </div>

                            <div className="bg-white h-16 mt-8 flex text-center items-center w-[60%] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <RiLockPasswordFill size={25} />
                                </div>

                                <input type="password" id="search" class="text-[#2D4944] rounded-full border border-[#2D4944]
                                pl-36 w-full h-full focus:border-[#507c74]" 
                                placeholder="Password" required />
                            </div>

                            <button className="bg-[#2D4944] w-[60%] h-16 mt-8 text-white rounded-full hover:bg-[#497069]">Log In</button>
                        </div>
                
                    </div>




                    <div onClick={(e) => e.stopPropagation()} className="w-[50%] h-[60%] hidden md:flex xl:hidden 2xl:hidden bg-white rounded-3xl drop-shadow-3xl flex-col ">

                        <div className="text-[#c8cbc8] hover:text-[#2D4944] flex justify-end text-right mt-4 mr-4">
                            <FaWindowClose size={35} onClick={closeLogin} />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h1 className="text-[#2D4944] p-4 font-bold text-4xl">Cultivate
                                <span className="text-[#77AC6F]">Cart</span>
                            </h1>

                            <div className="bg-white h-16 mt-10 flex text-font-semibold w-[60%] rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-[85px] flex items-center justify-center">
                                    <FaUser size={20} />
                                </div>

                                <input type="text" id="search" class="text-[#2D4944] rounded-full border border-[#2D4944]
                                text-sm pl-[100px] w-full h-full focus:border-[#507c74]" 
                                placeholder="Username" required />
                            </div>

                            <div className="bg-white h-16 mt-8 flex text-center items-center w-[60%] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-[85px] flex items-center justify-center">
                                    <RiLockPasswordFill size={20} />
                                </div>

                                <input type="password" id="search" class="text-[#2D4944] rounded-full border border-[#2D4944]
                                pl-[100px] w-full text-sm h-full focus:border-[#507c74]" 
                                placeholder="Password" required />
                            </div>

                            <button className="bg-[#2D4944] w-[60%] h-16 mt-8 text-white rounded-full hover:bg-[#497069]">Log In</button>
                        </div>
                
                    </div>



                    <div onClick={(e) => e.stopPropagation()} className="w-[60%] h-[55%] sm:flex md:hidden xl:hidden 2xl:hidden bg-white rounded-3xl drop-shadow-3xl flex-col ">

                        <div className="text-[#c8cbc8] hover:text-[#2D4944] flex justify-end text-right mt-4 mr-4">
                            <FaWindowClose size={35} onClick={closeLogin} />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h1 className="text-[#2D4944] p-4 font-bold text-3xl">Cultivate
                                <span className="text-[#77AC6F]">Cart</span>
                            </h1>

                            <div className="bg-white h-12 mt-10 flex text-font-semibold w-[60%] rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-12 w-[65px] flex items-center justify-center">
                                    <FaUser size={15} />
                                </div>

                                <input type="text" id="search" class="text-[#2D4944] rounded-full border border-[#2D4944]
                                text-xs pl-[85px] w-full h-full focus:border-[#507c74]" 
                                placeholder="Username" required />
                            </div>

                            <div className="bg-white h-12 mt-5 flex text-font-semibold w-[60%] rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-12 w-[65px] flex items-center justify-center">
                                    <RiLockPasswordFill size={15} />
                                </div>

                                <input type="text" id="search" class="text-[#2D4944] rounded-full border border-[#2D4944]
                                text-xs pl-[85px] w-full h-full focus:border-[#507c74]" 
                                placeholder="Password" required />
                            </div>

                            <button className="bg-[#2D4944] w-[60%] h-12 mt-8 text-white rounded-full text-xs hover:bg-[#497069]">Log In</button>
                        </div>
                
                    </div>




                </div>

            </div>
        );
}

export default LogIn;
