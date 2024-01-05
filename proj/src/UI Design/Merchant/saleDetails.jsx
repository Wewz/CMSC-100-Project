import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaCoins } from "react-icons/fa6";

const SalesDetails =({showDetails, setShowDetails, transactionToShow}) => {

    const handleDate = (dateString) => {
        const parsedDate = new Date(dateString);
        const formattedDate = parsedDate.toLocaleDateString();

        const dateParts = formattedDate.split('/');

        const month = dateParts[0];
        const day = dateParts[1];
        const year = dateParts[2];

        const monthNumber = parseInt(dateParts[0], 10);

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const monthName = monthNames[monthNumber - 1];

        return monthName + " " + day + ", " + year;
    }

    if(!showDetails) return null;
    else 
        return (
            <div onClick={(e) => setShowDetails(false)} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                <div onClick={(e) => e.stopPropagation()} className="w-[50%] max-h-[80%] h-auto  py-16 bg-white rounded-3xl drop-shadow-3xl text-[#2D4944] border border-[#2D4944] flex flex-col justify-center items-center relative">

                    <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4">
                        <IoCloseCircle size={50} onClick={(e) => setShowDetails(false)} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                    </div>

                    <div className="w-[70%] font-bold text-2xl pb-4 border-b border-[#2D4944]">
                        Transaction Details
                    </div>

                   
                    <div className="flex justify-between pt-4 w-[70%]">

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Transaction ID:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{transactionToShow.tid}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Date of Approval:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{handleDate(transactionToShow.approval)}</h1>
                            </div>
                        </div>
                        

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Date of Order:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{handleDate(transactionToShow.date)}</h1>
                            </div>
                        </div>


                    </div>

                    <div className="flex justify-between pt-2 w-[70%]">

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">User Email Address:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{transactionToShow.email}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Quantity Ordered:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{transactionToShow.quantity}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                        </div>

                    </div>


                    <div className="flex justify-between pb-8 pt-3 w-[70%] border-b border-[#2D4944]">

                        <div className="w-[100%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Location:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{transactionToShow.address}</h1>
                            </div>
                        </div>

                    </div>


                    <div className="w-[70%] pt-6">
                        <div className="rounded-xl bg-[#2D4944] text-white w-44 p-2 text-sm flex text-center justify-center">
                            Product Details:
                        </div>
                    </div>


                    <div className="flex justify-between pt-3 w-[70%] pb-4 border-b border-[#2D4944]">

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Product ID:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{transactionToShow.product.pid}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Product Name:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{transactionToShow.product.ptitle}</h1>
                            </div>
                        </div>

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Product Price:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">₱{transactionToShow.product.price}.00</h1>
                            </div>
                        </div>


                    </div>

                    <div className="w-[40%] p-4">
                        <div className="bg-[#fb923c] text-white mt-4 p-4 rounded-xl gap-x-5 flex justify-center items-center">
                            <FaCoins size={40} />

                            <div className="flex flex-col">
                                <div className="text-base font-semibold">
                                    Transaction Revenue: 
                                </div>
                                <div className="text-xl font-bold">
                                    ₱{transactionToShow.product.price * transactionToShow.quantity}.00
                                </div>
                            </div>
                        </div>

                    </div>
            
                </div>


            </div>
        );
}

export default SalesDetails;