import React from "react";
import { GrContactInfo } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Info from "./info";
import Address from "./address";
import Account from "./account";

function Sign() {
    return (
      <div>
        <div className="">
            
            <div className="w-[90%] pl-[10%] mb-20">

                <div className="border-b border-[#2D4944] w-full pb-6 pt-14">
                    <h1 className="text-[#2D4944] font-normal text-4xl">Create Account</h1>
                </div>

                <div className="justify-center text-center hidden xl:flex 2xl:flex">


                    <div className="w-[28%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-20 border flex text-center pr-4 items-center w-full border-[#2D4944] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-20 w-28 flex items-center justify-center">
                                    <GrContactInfo size={33} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2>Personal Information</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>

                        <Info />
                    </div>

                    <div className="w-[28%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-20 border flex text-center pr-4 items-center w-full border-[#2D4944] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-20 w-28 flex items-center justify-center">
                                    <FaLocationDot size={30} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2>Address</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>

                        <Address />
                    </div>

                    <div className="w-[28%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-20 border flex text-center pr-4 items-center w-full border-[#2D4944] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-20 w-28 flex items-center justify-center">
                                    <MdAccountCircle size={30} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2>Account</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Account />
                    </div>

                </div>





                <div className="justify-center text-center hidden lg:flex xl:hidden 2xl:hidden">


                    <div className="w-[28%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-center pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <GrContactInfo size={28} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Personal Information</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Info />
                    </div>

                    <div className="w-[28%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-center pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <FaLocationDot size={25} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Address</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Address />
                    </div>

                    <div className="w-[28%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-center pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <MdAccountCircle size={25} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Account</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Account />
                    </div>

                </div>





                <div className="justify-center text-center items-center flex-col hidden md:flex lg:hidden xl:hidden 2xl:hidden">


                    <div className="w-[50%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-left pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <GrContactInfo size={28} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Personal Information</h2>
                            </div>
                        </div>
                        <Info />
                    </div>

                    <div className="w-[50%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-left pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <FaLocationDot size={25} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Address</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Address />
                    </div>

                    <div className="w-[50%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-left pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <MdAccountCircle size={25} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Account</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Account />
                    </div>


                </div>


                <div className="justify-center text-center items-center flex-col flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">


                    <div className="w-[60%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-left pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <GrContactInfo size={28} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Personal Information</h2>
                            </div>
                        </div>
                        <Info />
                    </div>

                    <div className="w-[60%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-left pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <FaLocationDot size={25} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Address</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Address />
                    </div>

                    <div className="w-[60%] flex flex-col mx-10">
                        <div className="flex items-center justify-center pt-20 w-full">

                            <div className="bg-white h-16 border flex text-left pr-4 items-center w-full border-[#2D4944] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <MdAccountCircle size={25} />
                                </div>
                                <div className="w-[10%]"></div>
                                <h2 className="text-sm">Account</h2>
                                <div className="w-[10%]"></div>
                            </div>
                        </div>
                        <Account />
                    </div>
                </div>


            </div>
        </div>

      </div>
    );
  }
  
  export default Sign;
