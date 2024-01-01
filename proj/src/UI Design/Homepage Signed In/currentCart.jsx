import React, {useState, useEffect} from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { TbMinus } from "react-icons/tb";
import { HiPlusSm } from "react-icons/hi";

const CurrentCart = ({seeCart, setSeeCart, basket, total, addCart, remove, totalCost, removeProduct}) => {

    if(!seeCart) {
        return null;
    }
    else {
        return(
            <div onClick={(e) => setSeeCart(false)} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                <div onClick={(e) => e.stopPropagation()} className="w-[50%] max-h-[80%] h-auto  py-16 bg-white rounded-3xl drop-shadow-3xl border border-[#2D4944] flex flex-col justify-center relative">

                        <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4">
                            <IoCloseCircle size={50} onClick={(e) => setSeeCart(false)} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                        </div>

                        <div className="font-bold text-[#2D4944] flex pl-24">
                            <h1 className="text-2xl">Your Basket</h1>
                        </div> 

                        <div className="flex justify-center items-center my-8 max-h-[60%]">
                            <div className="overflow-y-auto max-h-full w-[80%]">
                                <div className="gap-y-2 my-3 rounded-2xl flex flex-col w-[90%]">
                                    {basket.map((p) => (
                                        <div key={p.key} className="flex justify-between px-4 border border-[#2D4944] text-[#2D4944] p-5 rounded-xl h-36 relative overflow-hidden">

                                            <div className="absolute items-center w-40 h-36 left-0 top-0">
                                                <img className="object-cover object-center w-full h-full" src={p.addedProduct.url} alt=""/>
                                            </div>

                                            <div className="flex flex-col w-[50%] justify-between ml-48">

                                                <div className="truncate">
                                                    <p className="truncate font-semibold text-lg">{p.addedProduct.ptitle}</p>
                                                </div>

                                                <div className="truncate">
                                                    <p className="text-[#6b9089] font-semibold truncate text-lg">₱{p.addedProduct.price}.00</p>
                                                </div>

                                                <div className="flex text-sm mr-2"> 
                                                    <button className="bg-[#2D4944] text-white rounded-l-md p-1 hover:bg-[#77AC6F]" onClick={(e) => remove(p)}>
                                                        <TbMinus size={15} />
                                                    </button>
                                                    <p className="px-2 w-10 flex justify-center items-center text-center border-y border-[#2D4944] border-opacity-40">{p.count}</p>
                                                    <button className="bg-[#2D4944] text-white rounded-r-md p-1 hover:bg-[#77AC6F]" onClick={(e) => addCart(p.addedProduct)}>
                                                        <HiPlusSm size={15} />
                                                    </button>
                                                </div>
                                            </div>

                                            <button className="bg-[#2D4944] absolute top-0 right-0 mt-4 mr-4 text-white text-xs rounded-lg p-3 hover:bg-[#DCE0DC] hover:text-[#2D4944]"
                                             onClick={(e) => removeProduct(p)}>
                                               Remove
                                            </button>

                                            <div className="text-base font-bold flex items-end justify-end">
                                                <p className="text-[#b1b1b1] mr-3 text-sm">SubTotal:</p>
                                                <p>₱{p.addedProduct.price * p.count}</p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-2xl font-bold flex items-end justify-end text-[#2D4944] px-32 mt-7">
                            <p className="text-[#b1b1b1] mr-3 text-xl">Basket SubTotal</p>
                            <p className=" border-l-2 border-[#2D4944] border-opacity-40 pl-3" >₱{totalCost}.00</p>
                        </div>             

                
                    </div>


            </div>
        );
    }
}

export default CurrentCart;