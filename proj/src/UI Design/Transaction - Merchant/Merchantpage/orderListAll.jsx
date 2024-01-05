import React, { useState, useEffect } from "react";
import PaginationButtons from "../../pagination/paginationButton";

import { FcCancel } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";

const OrderListAll = ({transactions, setTransactions, setOrderToShow, setShowDetails, actionTaken, setActionTaken}) => {

  const [pageCount, setPageCount] = useState(0);
  const [transactionPage, setTransactionPage] = useState([]);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(5);

  useEffect(() => {

    setPageCount(Math.ceil(transactions.length / 5));
    setTransactionPage(transactions.slice(pageStart, pageEnd));
  }, [transactions]);

  useEffect(() => {
    setTransactionPage(transactions.slice(pageStart, pageEnd));
  }, [pageStart, pageEnd]);


  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3001/get-transaction');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };


  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {

    if(!actionTaken) return;

    fetchOrders();
    setActionTaken(false);
  }, [actionTaken]);

  const handleShowDetails = (current) => {
    setOrderToShow(current)
    setShowDetails(true);
  }

  const handlePageClick = (event) => {
    setPageEnd((event.selected + 1) * 5);
    setPageStart(((event.selected + 1) * 5) - 5);
  }

  const getStatus = (status) => {

    if(status === 0) {
        return "Pending";
    }
    else if(status === -1) {
        return "Cancelled";
    }
    else if(status === -2) {
        return "Cancelled";
    }
    else if(status === 1) {
        return "Approved";
    }
  }
  
  const handleDate = (dateString) => {
    const parsedDate = new Date(dateString);
    const formattedDate = parsedDate.toLocaleDateString();

    const dateParts = formattedDate.split('/');

    const dayString = dateParts[1];
    const yearString = dateParts[2];
    const monthNumber = parseInt(dateParts[0], 10);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthName = monthNames[monthNumber - 1];

    return monthName + " " + dayString + ", " + yearString;
}

  return (

        <div className="w-[90%] flex flex-col justify-center content-center items-center gap-y-5">
                {transactionPage.map((t) => (
                    <div key={t.tid} className="w-full">
                        <div className="bg-white border border-[#2D4944] rounded-2xl flex items-center text-center justify-center p-5 font-bold text-sm">

                            {
                              t.status === 0 &&

                              <div className="flex flex-col text-[#7d7d7d] items-center justify-center w-[5%]">
                                <FcMediumPriority size={40}/>
                              </div>
                            }

                            {
                              (t.status === -1 || t.status === -2)  && (
                                <div className="flex flex-col text-[#ff3535] items-center justify-center w-[5%]">
                                  <FcCancel size={40} />
                                </div>
                              )
                            }

                            {
                              t.status === 1 &&

                              <div className="flex flex-col text-[#009f78] items-center justify-center w-[5%]">
                                <FcShipped size={40}/>
                              </div>
                            }

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Transaction ID: </p>
                                <p className="truncate">{t.tid}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Ordered Product: </p>
                                <p className="truncate">{t.product.ptitle}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Cost: </p>
                                <p className="truncate">₱{t.quantity * t.product.price}.00</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Status: </p>
                                <p className="truncate">{getStatus(t.status)}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Date Ordered: </p>
                                <p className="truncate">{handleDate(t.date)}</p>
                            </div>

                            <div className="w-[10%]">
                                <div className="flex text-white bg-[#2D4944] cursor-pointer p-2 text-xs rounded-xl hover:bg-[#50726b] justify-center items-center w-[90%]"
                                onClick={(e) => handleShowDetails(t)}>
                                    View Details
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
                <PaginationButtons pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
    );
}

export default OrderListAll;
