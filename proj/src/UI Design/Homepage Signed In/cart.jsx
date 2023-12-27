import React, {useState, useEffect} from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import { TbMinus } from "react-icons/tb";
import { RiShoppingBasketLine } from "react-icons/ri";

const Cart = ({addCart, basket, remove, empty, totalCost, user}) => {

    const [transaction, setTransaction] = useState({
        tid: "", 
        pid: "", 
        quantity: "",
        status: "0",
        email: "",
	    date: "",
        time: ""
    });


    const getDate= () => {
        const date = new Date();
        return date;
    }

    const getTime= () => {
        const date = new Date();
        const time = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
        return time;
    }

	const handleOnSubmit = async (e) => {
        e.preventDefault(); // Move this line outside the loop
    
        for (let i = 0; i < basket.length; i++) {

            const pid = basket[i].addedProduct.pid;
            const tid = "1";
            const quantity = basket[i].count;
            const status = "0";
            const email = user.email;
            const time = getTime();
            const date = getDate();
    
            try {
                let result = await fetch('http://localhost:3001/add-transaction', {
                    method: "post",
                    body: JSON.stringify({ tid, pid, quantity, status, email, date, time }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                result = await result.json();
                console.warn(result);
    
                if (result.success) {
                    alert("Data saved successfully");
                } else {
                    alert(result.message);
                }
    
                if (result.success) {
                    // Do additional actions if needed
                }
            } catch (error) {
                console.error('Fetch error:', error.message);
                alert('Error occurred while saving data');
            }
        }
    };

    return(
        <div className="w-[30%]">
            <div className="border border-[#2D4944] rounded-3xl p-6 w-full text-[#2D4944] flex flex-col">
                <h1 className="font-bold text-lg">Order Summary</h1>

                {!empty ?
                    <div className="my-6">

                        <div className="flex-col gap-y-2 my-3 border-b border-[#2D4944] pb-4 hidden 2xl:flex xl:flex">
                            {
                                basket.map((p) => (
                                    <div key={p.key} className="flex justify-between px-4">
                                        
                                        <div className="w-[50%] truncate">
                                            <p className="truncate">{p.addedProduct.ptitle}</p>
                                        </div>

                                        <div className="flex w-[50%] justify-between">

                                            <div className="flex text-sm mr-2"> 
                                                <button className="bg-[#2D4944] text-white rounded-l-md p-1 hover:bg-[#77AC6F]"
                                                onClick={(e) => remove(p)} >
                                                    <TbMinus size={15} />
                                                </button>

                                                <p className="px-2 w-10 flex justify-center items-center text-center border-y border-[#2D4944] border-opacity-40">{p.count}</p>

                                                <button className="bg-[#2D4944] text-white rounded-r-md p-1 hover:bg-[#77AC6F]"
                                                onClick={(e) => addCart(p.addedProduct)} >
                                                    <HiPlusSm size={15} />
                                                </button>
                                            </div>

                                            <p>₱{p.addedProduct.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> 



                        <div className="flex-col gap-y-2 my-3 border-b border-[#2D4944] pb-4 hidden 2xl:hidden xl:hidden lg:flex">
                            {
                                basket.map((p) => (
                                    <div key={p.key} className="flex justify-between px-4 text-sm">
                                        
                                        <div className="w-[50%] truncate">
                                            <p className="truncate">{p.addedProduct.ptitle}</p>
                                        </div>

                                        <div className="flex w-[50%] justify-between">

                                            <div className="flex text-sm mr-2"> 
                                                <button className="bg-[#2D4944] text-white rounded-l-md p-1 hover:bg-[#77AC6F]"
                                                onClick={(e) => remove(p)} >
                                                    <TbMinus size={12} />
                                                </button>

                                                <p className="px-2 w-7 flex justify-center items-center text-center border-y border-[#2D4944] border-opacity-40">{p.count}</p>

                                                <button className="bg-[#2D4944] text-white rounded-r-md p-1 hover:bg-[#77AC6F]"
                                                onClick={(e) => addCart(p.addedProduct)} >
                                                    <HiPlusSm size={12} />
                                                </button>
                                            </div>

                                            <p>₱{p.addedProduct.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> 
                        


                        <div className="flex justify-between px-4 font-bold">
                            <div> 
                                Total Cost:
                            </div>

                            <div> 
                                ₱{totalCost}
                            </div>
                        </div>

                    </div>

                    :
                    <div className="flex flex-col justify-center items-center text-center my-10 text-[#b1b1b1]">
                        <RiShoppingBasketLine size={100} className=""/>
                        <p className="font-semibold text-xl text-[#b1b1b1]">Empty basket</p>
                    </div>
                }

                <button className="bg-white h-12 border border-[#2D4944] w-full mt-4 text-[#2D4944] rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944] flex justify-between content-center items-center">
                    See Basket
                    <FaArrowRightLong size={15} />
                </button>

                <button className="bg-[#2D4944] h-12 w-full mt-4 text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944] flex justify-between content-center items-center"
                onClick={(e) => handleOnSubmit(e)}>
                    Continue To Payment
                    <FaArrowRightLong size={15} />
                </button>

            </div>
        </div>
    );
}

export default Cart;