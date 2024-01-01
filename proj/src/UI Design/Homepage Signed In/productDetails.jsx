import React, {useState, useEffect} from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { TbMinus } from "react-icons/tb";
import { HiPlusSm } from "react-icons/hi";

const ProductDetails = ({ seeProduct, setSeeProduct, productToSee, addCart2 }) => {

    const [productQuantity, setProductQuantity] = useState(0);

    const add = () => {
        if(productQuantity < productToSee.quantity) setProductQuantity(productQuantity + 1);
    }

    const remove = () => {
        if(productQuantity > 0) setProductQuantity(productQuantity - 1);
    }

    const hanleClose = () => {
        setProductQuantity(0);
        setSeeProduct(false);
    }

    const handleAddToBasket = () => {
        if(productQuantity === 0) return;

        addCart2(productToSee, productQuantity);
        hanleClose();
    };

    if(!seeProduct) return null;
    else
        return(
            <div onClick={(e) => hanleClose()} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                    <div onClick={(e) => e.stopPropagation()} className="w-[30%] h-[80%] bg-white rounded-3xl drop-shadow-3xl border border-[#2D4944] flex flex-col items-center relative">

                        <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4 z-10">
                            <IoCloseCircle
                                size={50}
                                onClick={(e) => hanleClose()}
                                className="text-white drop-shadow-lg dark-drop-shadow cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col h-[30%] w-full items-center justify-center absolute top-0 z-0">
                            <img className="object-cover object-center w-full h-full rounded-t-3xl" src={productToSee.url} alt=""/>
                        </div>


                        <div className="flex flex-col mt-[45%] w-[70%]">
                            <div className="border-b border-[#2D4944] mb-4 pb-8">
                                <h1 className="mt-3 font-bold text-3xl text-[#2D4944]">{productToSee.ptitle}</h1>
                            </div>

                            <div className="mb-4 pb-4 border-b border-[#2D4944] font-bold text-[#b7b7b7] text-sm relative">

                                <div className="absolute p-3 bg-[#898989] rounded-xl text-xs">
                                    <h1 className="text-white text-xs">Product Details</h1>
                                </div>

                                <div className="flex justify-between pt-12">

                                    <div>
                                        <h1>Product Price:</h1>
                                        <h1 className=" text-[#2D4944] text-lg">₱{productToSee.price}.00</h1>
                                    </div>

                                    <div>
                                        <h1>Stock Quantity:</h1>
                                        <h1 className=" text-[#2D4944] text-lg">{productToSee.quantity}</h1>
                                    </div>

                                    <div>
                                        <h1>Status:</h1>
                                        <h1 className=" text-[#2D4944] text-lg">Available</h1>
                                    </div>

                                </div>

                            </div>

                            <div className="mb-4 pb-4 font-bold text-[#b7b7b7] text-sm relative">

                                <div className="absolute p-3 bg-[#898989] rounded-xl text-xs">
                                    <h1 className="text-white text-xs">Order Details</h1>
                                </div>

                                <div className="flex justify-between pt-12">

                                    <div>
                                        <h1 className="mb-1">Order Quantity:</h1>

                                        <div className="flex text-sm mr-2"> 
                                            <button className="bg-[#2D4944] text-white rounded-l-md p-1 hover:bg-[#77AC6F]" onClick={(e) => remove()}>
                                                <TbMinus size={20} />
                                            </button>
                                            <p className="px-2 w-10 flex justify-center items-center text-center border-y border-[#2D4944] border-opacity-40">{productQuantity}</p>
                                            <button className="bg-[#2D4944] text-white rounded-r-md p-1 hover:bg-[#77AC6F]" onClick={(e) => add()}>
                                                <HiPlusSm size={20} />
                                            </button>
                                        </div>

                                    </div>

                                    <div>
                                        <h1>Order Total Price:</h1>
                                        <h1 className=" text-[#2D4944] text-lg">₱{productToSee.price * productQuantity}.00</h1>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <button className="bg-[#2D4944] h-12 w-[70%] text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]"
                        onClick={(e) => handleAddToBasket()} >
                            Add To Basket
                        </button>

                    
                    </div>


                </div>
        );
    }

export default ProductDetails