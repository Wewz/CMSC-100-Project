import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

const OrderDetails =({showDetails, setShowDetails, orderToShow, setActionTaken}) => {

    const [product, setProduct] = useState({
        pid: "",
        ptitle: "",
        ptype: 0,
        price: 0,
        quantity: 0,
        url: ""
    });

    const getDate= () => {
        const date = new Date();
        return date;
    }

    const fetchProduct = async () => {

        try {
            const response = await fetch(`http://localhost:3001/get-product-by-code/${orderToShow.product.pid}`);
            const data = await response.json();

            if (data.success) {
                setProduct(data.product);
            } else {
                console.log('No Existing Product');
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {

        if(!showDetails) return;

        fetchProduct();
    }, [showDetails]);


    const getStatus = (status) => {

        if(status === 0) {
            return "Pending";
        }
        else if(status === -1) {
            return "Cancelled";
        }
        else if(status === -2) {
            return "Cancelled By User";
        }
        else if(status === 1) {
            return "Approved";
        }
    }
    
    const handleApproveTransaction = async () => {

        const tid = orderToShow.tid;
        const pid = orderToShow.product.pid;
        const newQuantity = product.quantity - orderToShow.quantity;
        const newApproval = getDate();

        if(newQuantity < 0) return;
    
        try {

            const response = await fetch('http://localhost:3001/update-transaction-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tid, newStatus: 1 }),
            });

            const response2 = await fetch('http://localhost:3001/update-product-quantity', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pid, quantity: newQuantity }),
            });

            const response3 = await fetch('http://localhost:3001/update-transaction-approval', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tid, newApproval }),
            });

            fetchProduct();
            setActionTaken(true);
            setShowDetails(false);
        } 
        catch (error) {
            console.error('Error updating transaction status:', error);
        }
    };

    const handleCancelTransaction = async () => {

        const tid = orderToShow.tid;
        const newCancelation = getDate();
    
        try {
            const response = await fetch('http://localhost:3001/update-transaction-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tid, newStatus: -1 }),
            });

            const response3 = await fetch('http://localhost:3001/update-transaction-cancelation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tid, newCancelation }),
            });

            fetchProduct();
            setActionTaken(true);
            setShowDetails(false);
        } 
        catch (error) {
            console.error('Error updating transaction status:', error);
        }
    };

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
        return(
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
                                <h1 className=" text-[#2D4944] text-base font-semibold">{orderToShow.tid}</h1>
                            </div>
                        </div>

                        {
                            orderToShow.status === 0 &&

                            <div className="w-[33%] p-2">
                                <div className="">
                                    <h1 className="text-[#7e7e7e] text-xs">Status:</h1>
                                </div>

                                <div className="p-2 border rounded-xl border-[#2D4944]">
                                    <h1 className=" text-[#2D4944] text-base font-semibold">{getStatus(orderToShow.status)}</h1>
                                </div>
                            </div>
                        }

                        {
                            orderToShow.status === 1 &&

                            <div className="w-[33%] p-2">
                                <div className="">
                                    <h1 className="text-[#7e7e7e] text-xs">Date of Approval:</h1>
                                </div>

                                <div className="p-2 border rounded-xl border-[#2D4944]">
                                    <h1 className=" text-[#2D4944] text-base font-semibold">{handleDate(orderToShow.approval)}</h1>
                                </div>
                            </div>
                        }

                        {
                            (orderToShow.status === -1 || orderToShow.status === -2) &&
                            (
                            <div className="w-[33%] p-2">
                                <div className="">
                                    <h1 className="text-[#7e7e7e] text-xs">Date of Cancelation:</h1>
                                </div>

                                <div className="p-2 border rounded-xl border-[#2D4944]">
                                    <h1 className=" text-[#2D4944] text-base font-semibold">{handleDate(orderToShow.cancelation)}</h1>
                                </div>
                            </div>
                            )
                        }


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Date of Order:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{handleDate(orderToShow.date)}</h1>
                            </div>
                        </div>



                    </div>

                    <div className="flex justify-between pt-2 w-[70%]">

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">User Email Address:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{orderToShow.email}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Quantity Ordered:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{orderToShow.quantity}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Amount:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">₱{orderToShow.product.price * orderToShow.quantity}.00</h1>
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-between pb-8 pt-3 w-[70%] border-b border-[#2D4944]">

                        <div className="w-[100%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Location:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{orderToShow.address}</h1>
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
                                <h1 className=" text-[#2D4944] text-base font-semibold">{orderToShow.product.pid}</h1>
                            </div>
                        </div>


                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Product Name:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{orderToShow.product.ptitle}</h1>
                            </div>
                        </div>

                        <div className="w-[33%] p-2">
                            <div className="">
                                <h1 className="text-[#7e7e7e] text-xs">Quantity in Stock:</h1>
                            </div>

                            <div className="p-2 border rounded-xl border-[#2D4944]">
                                <h1 className=" text-[#2D4944] text-base font-semibold">{product.quantity}</h1>
                            </div>
                        </div>


                    </div>

                    {
                        orderToShow.status == 0 &&

                        <div className="flex justify-between pt-3 w-[70%] pb-3">

                            <div className="w-[50%] p-4">
                                <div className="bg-[#ff3535] text-white font-semibold text-base p-4 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#fc5d5d] gap-2"
                                onClick={(e) => handleCancelTransaction()}>
                                    <FaRegCircleXmark size={30} />
                                    Cancel Transaction
                                </div>
                            </div>


                            <div className="w-[50%] p-4">
                                <div className="bg-[#009f78] text-white font-semibold text-base p-4 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#5c817a] gap-2"
                                onClick={(e) => handleApproveTransaction()}>
                                    <FaRegCircleCheck size={30} />
                                    Approve Transaction
                                </div>

                            </div>
                        </div>
                    }

                    {
                        orderToShow.status === 1 &&

                        <div className="w-[30%] p-4">
                            <div className="bg-[#009f78] text-white font-semibold text-base mt-4 p-4 rounded-xl flex justify-center items-center gap-2"
                            >
                                <MdCheckCircleOutline size={30} />
                                Approved
                            </div>

                        </div>
                    }

                    {
                        (orderToShow.status === -1 || orderToShow.status === -2)  &&
                        (
                        <div className="w-[30%] p-4">
                            <div className="bg-[#ff3535] text-white font-semibold text-base mt-4 p-4 rounded-xl flex justify-center items-center gap-2"
                            >
                                <MdOutlineCancel size={30} />
                                Cancelled
                            </div>

                        </div>
                        )
                    }

            
                </div>


            </div>
        );
}

export default OrderDetails;