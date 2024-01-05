import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

const ProductInfo = ({showDetails, setShowDetails, prodcutToShow, setActionTaken}) => {

    const [newQuantity, setNewQuantity] = useState("");
    const [newPrice, setNewPrice] = useState("");

    const handleUpdateProduct = async () => {

        if(newQuantity.length === 0 && newPrice.length === 0) return;

        const pid = prodcutToShow.pid;
    
        try {

            if(newQuantity.length !== 0) {

                const quantity = parseInt(newQuantity) + prodcutToShow.quantity;

                const response = await fetch('http://localhost:3001/update-product-quantity', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pid, quantity }),
                });
            }

            if(newPrice.length !== 0) {

                const price = parseInt(newPrice);

                const response2 = await fetch('http://localhost:3001/update-product-price', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pid, price }),
                });
            }

            setActionTaken(true);
            setShowDetails(false);
            setNewQuantity("");
            setNewPrice("");
        } 
        catch (error) {
            console.error('Error updating transaction status:', error);
        }
    };

    const handleQuantityChange = (event) => {
        setNewQuantity(event.target.value);
    };

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value);
    };

    const getProductType = (type) => {
        if(type === 1) {
            return "Crop";
        }
        
        return "Poultry";
    }

    if(!showDetails) return null;
    else
        return(
            <div onClick={(e) => setShowDetails(false)} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                <div onClick={(e) => e.stopPropagation()} className="w-[30%] max-h-[87%] h-auto  py-16 bg-white rounded-3xl drop-shadow-3xl text-[#2D4944] border border-[#2D4944] flex flex-col justify-center items-center relative">

                    <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4">
                        <IoCloseCircle size={50} onClick={(e) => setShowDetails(false)} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                    </div>

                    <div className="w-[70%] font-bold text-2xl pb-4 border-b border-[#2D4944]">
                        Product Details
                    </div>
                             
                    <div className="flex justify-between pt-6 w-[70%]">
                        <div className="w-full h-44 overflow-hidden border rounded-xl border-[#2D4944]">
                            <img className="object-cover object-center w-full h-full" src={prodcutToShow.url} alt=""/>
                        </div>
                    </div>


                    <div className="flex justify-between pt-2 w-[70%]">

                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Product ID:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{prodcutToShow.pid}</h1>
                            </div>
                        </div>


                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Product Name:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{prodcutToShow.ptitle}</h1>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between pt-2 w-[70%] pb-6 border-b border-[#2D4944]">

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Price:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">₱{prodcutToShow.price}.00</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Quantity in Stock:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{prodcutToShow.quantity}</h1>
                            </div>
                        </div>

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Product Type:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{getProductType(prodcutToShow.ptype)}</h1>
                            </div>
                        </div>

                    </div>


                    <div className="w-[70%] pt-6">
                        <div className="rounded-xl bg-[#2D4944] text-white w-60 p-2 text-sm flex text-center justify-center">
                            Update Product Information:
                        </div>
                    </div>


                    <div className="flex justify-between pt-3 w-[70%] pb-4 border-b border-[#2D4944]">

                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Increase Quantity in Stock:</h1>
                            </div>

                            <input type="text" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]" 
                                placeholder="Additional Quantity" onChange={(e) => handleQuantityChange(e)} />
                        </div>


                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Change Price:</h1>
                            </div>

                            <input type="text" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]" 
                                placeholder="New Price" onChange={(e) => handlePriceChange(e)} />
                        </div>

                    </div>

                    <div className="flex justify-between pt-3 w-[70%]">

                        <div className="w-[50%] p-4">
                            <div className="bg-[#ff3535] text-white font-semibold text-base p-4 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#fc5d5d] gap-2"
                            onClick={(e) => setShowDetails(false)}>
                                Close
                            </div>
                        </div>


                        <div className="w-[50%] p-4">
                            <div className="bg-[#009f78] text-white font-semibold text-base p-4 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#5c817a] gap-2"
                            onClick={(e) => handleUpdateProduct()}>
                                Update
                            </div>

                        </div>
                    </div>

            
                </div>


            </div>
        );
}

export default ProductInfo;