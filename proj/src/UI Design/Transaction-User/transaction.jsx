import React, { useState} from "react";
import TransactionTitle from "./transactionTitle";
import TransactionContent from "./transactionContent";

const Transaction = ({user}) => {

    const [all, setAll] = useState(true);
    const [pending, setPending] = useState(false);
    const [approved, setApproved] = useState(false);

    return(
        <div className="flex flex-col min-h-[700px] ">

            <TransactionTitle all={all} setAll={setAll} pending={pending} setPending={setPending} approved={approved} setApproved={setApproved} />
            <TransactionContent all={all} pending={pending} user={user} />

        </div>
    )
}


export default Transaction;