import React, { useState,  useEffect, useRef } from "react";

const TransactionTitle = ({all, setAll, pending, setPending, approved, setApproved, cancelled, setCancelled}) => {

    const [current, setCurrent] = useState("All");
    const isInitialRender = useRef(true);

    useEffect(() => {

        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }

        if (all) {
            setCurrent("All");
        }
        else if(pending) {
            setCurrent("Pending");
        }
        else if(approved){
            setCurrent("Approved");
        }
        else {
            setCurrent("Cancelled");
        }
    }, [all, pending, approved]);

    const handleAllButton = () => {
        setAll(true);
        setPending(false);
        setApproved(false);
        setCancelled(false);
    }

    const handlePendingButton = () => {
        setAll(false);
        setPending(true);
        setApproved(false);
        setCancelled(false);
    }

    const handleApprovedButton = () => {
        setAll(false);
        setPending(false);
        setApproved(true);
        setCancelled(false);
    }

    const handleCancelledButton = () => {
        setAll(false);
        setPending(false);
        setApproved(false);
        setCancelled(true);
    }

    const containerClassNameAll = all ? 'flex gap-x-3 text-sm mt-5' : 'hidden';
    const containerClassNamePending = pending ? 'flex gap-x-3 text-sm mt-5' : 'hidden';
    const containerClassNameApproved = approved ? 'flex gap-x-3 text-sm mt-5' : 'hidden';
    const containerClassNameCancelled = cancelled ? 'flex gap-x-3 text-sm mt-5' : 'hidden';

    return(
        <div className="flex justify-between items-center mt-16 w-[80%] ml-[10%] pb-7 border-b border-[#2D4944]">


            <div className="text-[#2D4944] block">
                <p className="text-sm">
                    <span className="font-semibold text-5xl mr-4">Transaction  </span>
                    <span className="font-medium text-base">— {current} Transactions</span>
                </p>
            </div> 

            <div className={containerClassNameAll}>
                <div className="flex gap-x-3 text-sm mt-5">
                    <button className="p-2 border border-[#2D4944] rounded-xl w-20  hover:bg-[#e0dede]"
                    onClick={(e) => handleAllButton()}>
                        All
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handlePendingButton()} >
                        Pending
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handleApprovedButton()} >
                        Approved
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handleCancelledButton()} >
                        Cancelled
                    </button>
                </div>
            </div>

            <div className={containerClassNamePending}>
                <div className="flex gap-x-3 text-sm mt-5">
                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-20 hover:bg-[#69978e]"
                    onClick={(e) => handleAllButton()}>
                        All
                    </button>

                    <button className="p-2 border border-[#2D4944] rounded-xl w-24 hover:bg-[#e0dede]"
                    onClick={(e) => handlePendingButton()} >
                        Pending
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handleApprovedButton()} >
                        Approved
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handleCancelledButton()} >
                        Cancelled
                    </button>
                </div>
            </div>

            <div className={containerClassNameApproved}>
                <div className="flex gap-x-3 text-sm mt-5">
                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-20 hover:bg-[#69978e]"
                    onClick={(e) => handleAllButton()}>
                        All
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handlePendingButton()} >
                        Pending
                    </button>

                    <button className="p-2 border border-[#2D4944] rounded-xl w-24 hover:bg-[#e0dede]"
                    onClick={(e) => handleApprovedButton()} >
                        Approved
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handleCancelledButton()} >
                        Cancelled
                    </button>
                </div>
            </div>

            <div className={containerClassNameCancelled}>
                <div className="flex gap-x-3 text-sm mt-5">
                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-20 hover:bg-[#69978e]"
                    onClick={(e) => handleAllButton()}>
                        All
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handlePendingButton()} >
                        Pending
                    </button>

                    <button className="p-2 bg-[#2D4944] text-white rounded-xl w-24 hover:bg-[#69978e]"
                    onClick={(e) => handleApprovedButton()} >
                        Approved
                    </button>

                    <button className="p-2 border border-[#2D4944] rounded-xl w-24 hover:bg-[#e0dede]"
                    onClick={(e) => handleCancelledButton()} >
                        Cancelled
                    </button>
                </div>
            </div>

        </div> 

    )
}


export default TransactionTitle;