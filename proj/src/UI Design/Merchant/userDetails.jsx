import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const UserDetails = ({showDetails, setShowDetails, userToShow}) => {

    if(!showDetails) return null;
    else 
        return(
            <div onClick={(e) => setShowDetails(false)} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                <div onClick={(e) => e.stopPropagation()} className="w-[30%] max-h-[80%] h-auto  py-16 bg-white rounded-3xl drop-shadow-3xl border border-[#2D4944] flex flex-col justify-center items-center relative">

                    <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4">
                        <IoCloseCircle size={50} onClick={(e) => setShowDetails(false)} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                    </div>

                    <div className="flex flex-col text-[#2D4944] items-center justify-center">
                        <FaRegCircleUser size={150}/>
                    </div>

                   

                    <div className="flex flex-col w-[70%] justify-center items-center">

                            <div className="border-b border-[#2D4944] mb-4 pb-8 text-center w-full">
                                <h1 className="mt-3 font-bold text-3xl text-[#2D4944]">{userToShow.fname} {userToShow.lname}</h1>
                                <h1 className="text-[#929292]">Full Name</h1>
                            </div>

                        <div className="mb-4 pb-6 border-b border-[#2D4944] text-sm relative">

                            <div className="flex justify-between pt-4 px-7">

                                <div className="w-[50%] p-2">
                                    <div className="">
                                        <h1 className="text-[#929292] text-xs">Phone Number:</h1>
                                    </div>

                                    <div className="p-2 border rounded-xl border-[#2D4944]">
                                        <h1 className=" text-[#2D4944] text-base font-semibold">{userToShow.phone}</h1>
                                    </div>
                                </div>


                                <div className="w-[50%] p-2">
                                    <div className="">
                                        <h1 className="text-[#929292] text-xs">Birthday:</h1>
                                    </div>

                                    <div className="p-2 border rounded-xl border-[#2D4944]">
                                        <h1 className=" text-[#2D4944] text-base font-semibold">{userToShow.bday}</h1>
                                    </div>
                                </div>


                            </div>


                            <div className="flex justify-between pt-1 px-7">

                                <div className="w-[100%] p-2">
                                    <div className="">
                                        <h1 className="text-[#929292] text-xs">Full Address:</h1>
                                    </div>

                                    <div className="p-2 border rounded-xl border-[#2D4944]">
                                        <h1 className=" text-[#2D4944] text-base font-semibold">{userToShow.hNum}, {userToShow.subd}, {userToShow.brg}, {userToShow.muni}, {userToShow.prov}</h1>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-between pt-1 px-7">

                                <div className="w-[50%] p-2">
                                    <div className="">
                                        <h1 className="text-[#929292] text-xs">User Name:</h1>
                                    </div>

                                    <div className="p-2 border rounded-xl border-[#2D4944]">
                                        <h1 className=" text-[#2D4944] text-base font-semibold">{userToShow.username}</h1>
                                    </div>
                                </div>

                                <div className="w-[50%] p-2">
                                    <div className="">
                                        <h1 className="text-[#929292] text-xs">Password:</h1>
                                    </div>

                                    <div className="p-2 border rounded-xl border-[#2D4944]">
                                        <h1 className=" text-[#2D4944] text-base font-semibold">{userToShow.password}</h1>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="w-[50%] text-white bg-[#2D4944] cursor-pointer mt-2 p-4 rounded-2xl hover:bg-[#50726b] flex justify-center items-center"  
                        onClick={(e) => setShowDetails(false)}>
                            Close
                        </div>

                    </div>

            
                </div>


            </div>
    );
}

export default UserDetails;