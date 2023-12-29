import React, { useState, useEffect } from "react";
import { ImFilesEmpty } from "react-icons/im";
import PaginationButtons from "../pagination/paginationButton";

const TransactionCancelled = ({user, transactions, setTransactions}) => {

    const [pageCount, setPageCount] = useState(0);
    const [transactionPage, setTransactionPage] = useState([]);
    const [pageStart, setPageStart] = useState(0);
    const [pageEnd, setPageEnd] = useState(5);

    const fetchCancelledTransactions = async () => {

        var status1 = -1;
        var status2 = -2

        try {
            const response = await fetch(`http://localhost:3001/get-cancelled-transaction/${user.email}/${status1}/${status2}`);
            const body = await response.json();

            if(body.success) setTransactions(body.transactions);
            else setTransactions([]);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    useEffect(() => {

        fetchCancelledTransactions();

    }, []);

    useEffect(() => {

        setPageCount(Math.ceil(transactions.length / 5));
        setTransactionPage(transactions.slice(pageStart, pageEnd));
    }, [transactions]);

    useEffect(() => {
        setTransactionPage(transactions.slice(pageStart, pageEnd));
    }, [pageStart, pageEnd]);

    const getStatus = (status) => {


        if(status === -1) {
            return "Cancelled By Admin";
        }
        else {
            return "Cancelled By User";
        }
    }

    const handlePageClick = (event) => {
        setPageEnd((event.selected + 1) * 5);
        setPageStart(((event.selected + 1) * 5) - 5);
    }

    return(
        <div className="flex flex-col justify-center items-center mt-8 mb-32">
            {transactions.length > 0 ? (
 
                <div className="flex flex-col justify-center items-center w-[80%] gap-y-5">
                    {
                        transactionPage.map((transaction) => (
                            <div key={transaction.tid} className="w-full flex border border-[#2D4944] rounded-xl h-32 overflow-hidden items-center">

                                <div className="flex flex-col items-center justify-center w-[12.5%]">
                                    <img className="object-cover object-center w-full h-full" src={transaction.product.url} alt=""/>
                                </div>
                                
                                <div className="flex flex-col font-bold text-sm justify-center text-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Product Name:</p>
                                    <p className="text-[#2D4944] text-base w-[70%] text-ellipsis">{transaction.product.ptitle}</p>
                                </div>

                                <div className="flex flex-col font-bold text-sm justify-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Product Price:</p>
                                    <p className="text-[#2D4944] text-base">₱{transaction.product.price}.00</p>
                                </div>

                                <div className="flex flex-col font-bold text-sm justify-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Quantity:</p>
                                    <p className="text-[#2D4944] text-base">{transaction.quantity}</p>
                                </div>

                                <div className="flex flex-col font-bold text-sm justify-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Total Price:</p>
                                    <p className="text-[#2D4944] text-base">₱{transaction.quantity * transaction.product.price}.00</p>
                                </div>

                                <div className="flex flex-col font-bold text-sm justify-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Status:</p>
                                    <p className="text-[#2D4944] text-base">Cancelled</p>
                                </div>

                                <div className="flex flex-col font-bold text-sm justify-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Date Ordered:</p>
                                    <p className="text-[#2D4944] text-base">{transaction.date.slice(0, 10)}</p>
                                </div>

                                <div className="flex flex-col font-bold text-sm justify-center items-center w-[12.5%]">
                                    <p className="text-[#b1b1b1]">Reason:</p>
                                    <p className="text-[#2D4944] text-base">{getStatus(transaction.status)}</p>
                                </div>
                            
                            
                            </div>
                        ))
                    }
                    <PaginationButtons pageCount={pageCount} handlePageClick={handlePageClick} />
                </div>
            ) : (
                <div className="flex flex-col text-[#cdcccc] items-center justify-center mt-12">
                    <ImFilesEmpty size={150}/>
                    <p className="mt-8 text-4xl font-bold">No Transaction Available...</p>
                </div>
            )}
        </div>
    );
}

export default TransactionCancelled;