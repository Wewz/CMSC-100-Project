import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';

const CreateProduct = ({newProduct, setNewProduct, setActionTaken}) => {

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [selectedOption, setSelectedOption] = useState("Poultry");
    const [quantity, setQuantity] = useState("");
    const [url, setURL] = useState("");

    const handleProductName = (event) => {
        setProductName(event.target.value);
    }

    const handleProductPrice = (event) => {
        setPrice(event.target.value);
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleProductQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const handleProductURL= (event) => {
        setURL(event.target.value);
    }

    const getProductID = () => {
        var productID= uuidv4();
        var id = productID.slice(0,8);
        return id;
    }

    const handleAddProduct = async (e) => {

        const newPid = getProductID();
        const newName = productName;
        const newPrice = price;
        const newQuantity = quantity;
        const newURL = url;

        var newType;

        console.log(newPid);
        console.log(newName);
        console.log(newPrice);
        console.log(newQuantity);
        console.log(newURL);
        console.log(selectedOption);

        if(newPid.length === 0 || newName.length === 0 || newPrice.length === 0 || newQuantity.length ===0 || newURL.length === 0) {
            return;
        }

        if(selectedOption.localeCompare("Crop")) newType = 1;
        else newType = 2;
        
        try {
            console.log("EHHHHHHHHHHHHHHHHHHHHHHHHHH");
            let result = await fetch('http://localhost:3001/add-product', {
                method: "post",
                body: JSON.stringify({ pid: newPid, ptitle: newName, ptype: newType, price: newPrice, quantity: newQuantity, url: newURL }),
                headers: {'Content-Type': 'application/json'}
            });

            result = await result.json();
            console.warn(result);

            if (result.success) {
                alert("Data saved successfully");
            } else {
                alert(result.message);
            }
        } 
        catch (error) {
            console.error('Fetch error:', error.message);
            alert('Error occurred while saving data');
        }

        setNewProduct(false);
        setURL("");
        setQuantity("");
        setSelectedOption("Poultry");
        setPrice("");
        setProductName("");
        setActionTaken(true);
    }


    if(!newProduct) return null;
    else
        return(
            <div onClick={(e) => setNewProduct(false)} className="fixed inset-0 bg-[#2D4944] bg-opacity-20 flex flex-col justify-center items-center z-50">

                <div onClick={(e) => e.stopPropagation()} className="w-[30%] max-h-[87%] h-auto  py-16 bg-white rounded-3xl drop-shadow-3xl text-[#2D4944] border border-[#2D4944] flex flex-col justify-center items-center relative">

                    <div className="absolute right-0 top-0 flex justify-end text-right mt-4 mr-4">
                        <IoCloseCircle size={50} onClick={(e) => setNewProduct(false)} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                    </div>

                    <div className="w-[70%] font-bold text-2xl pb-4 border-b border-[#2D4944]">
                        Add Product
                    </div>                    

                    <div className="flex justify-between pt-4 w-[70%]">

                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Product Name:</h1>
                            </div>

                            <input type="text" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]" 
                                placeholder="Product Name" onChange={(e) => handleProductName(e)} />
                        </div>

                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Product Type:</h1>
                            </div>

                            <select id="optionsDropdown" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]"
                                value={selectedOption} onChange={handleOptionChange}>
                                <option value="Poultry">Poultry</option>
                                <option value="Crop">Crop</option>
                            </select>
                        </div>

                    </div>


                    <div className="flex justify-between pt-4 w-[70%]">

                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Price:</h1>
                            </div>

                            <input type="text" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]" 
                                placeholder="Price" onChange={(e) => handleProductPrice(e)} />
                        </div>


                        <div className="w-[50%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Quantity:</h1>
                            </div>

                            <input type="text" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]" 
                                placeholder="Quantity" onChange={(e) => handleProductQuantity(e)} />
                        </div>

                    </div>

                    <div className="flex justify-between pt-4 w-[70%] pb-6 border-b border-[#2D4944]">

                        <div className="w-[100%] p-2">
                            <div className="">
                                <h1 className="text-[#686868] text-xs">Image URL:</h1>
                            </div>

                            <input type="text" className="p-2 border w-full text-base rounded-xl border-[#2D4944] focus:border-[#507c74]" 
                                placeholder="Image URL" onChange={(e) => handleProductURL(e)} />
                        </div>

                    </div>

                    <div className="flex justify-between pt-3 w-[70%]">

                        <div className="w-[50%] p-4">
                            <div className="bg-[#ff3535] text-white font-semibold text-base p-4 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#fc5d5d] gap-2"
                            onClick={(e) => setNewProduct(false)}>
                                Close
                            </div>
                        </div>


                        <div className="w-[50%] p-4">
                            <div className="bg-[#009f78] text-white font-semibold text-base p-4 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#5c817a] gap-2"
                            onClick={(e) => handleAddProduct()}>
                                Add Product
                            </div>

                        </div>
                    </div>

            
                </div>


            </div>
        );
    }

export default CreateProduct;