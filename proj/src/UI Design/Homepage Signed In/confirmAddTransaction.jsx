import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

const ConfirmAddTransaction = ({showConfirm, setShowConfirm, setAdd}) => {

    const handleYesButton = () => {
        setShowConfirm(false);
        setAdd(true);
    }

    if(!showConfirm) return null
    else
        return(
            <div onClick={(e) => setShowConfirm(false)} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                <div onClick={(e) => e.stopPropagation()} className="w-[30%] max-h-[80%] h-auto  py-16 bg-white rounded-3xl drop-shadow-3xl border border-[#2D4944] flex flex-col justify-center items-center relative">

                        <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4">
                            <IoCloseCircle size={50} onClick={(e) => setShowConfirm(false)} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                        </div>

                        <div className="font-bold text-[#2D4944] flex pb-12">
                            <h1 className="text-4xl">Checkout Basket?</h1>
                        </div>

                        <div className="flex gap-x-5">

                            <button className="bg-[#14b8a6] h-12 w-36 text-white rounded-lg px-6 p-2 hover:bg-[#5eead4]"
                            onClick={(e) => handleYesButton()} >
                                Yes
                            </button>

                            <button className="bg-[#ef4444] h-12 w-36 text-white rounded-lg px-6 p-2 hover:bg-[#fca5a5]"
                            onClick={(e) => setShowConfirm(false)} >
                                No
                            </button>   
                        </div> 
                    </div>
            </div>
        );
}

export default ConfirmAddTransaction;