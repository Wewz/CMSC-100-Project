import React, { useState} from "react";
import TransactionTitle from "./transactionTitle";
import TransactionContent from "./transactionContent";

const Transaction = ({user}) => {

    const [all, setAll] = useState(true);
    const [pending, setPending] = useState(false);
    const [approved, setApproved] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    return(
        <div className="flex flex-col min-h-[700px] ">

            <TransactionTitle all={all} setAll={setAll} pending={pending} setPending={setPending} approved={approved} setApproved={setApproved} cancelled={cancelled} setCancelled={setCancelled} />
            <TransactionContent all={all} pending={pending} approved={approved} cancelled={cancelled} user={user} />

        </div>
    )
}


export default Transaction;