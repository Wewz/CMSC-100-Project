import React, { useState, useEffect } from "react";
import { ImFilesEmpty } from "react-icons/im";

import TransactionAll from "./transactionAll";
import TransactionPending from "./transactionPending";
import TransactionApproved from "./transactionApproved";
import TransactionCancelled from "./transactionCancelled";

const TransactionContent = ({all, pending, approved, cancelled,user}) => {

    const [transactions, setTransactions] = useState([]);

    if(all) {
        return(
            <div>
                <TransactionAll user={user} transactions={transactions} setTransactions={setTransactions}  />
            </div>
         );

    }
    else if(pending) {
        return(
            <div>
                <TransactionPending user={user} transactions={transactions} setTransactions={setTransactions} />
            </div>
         );

    }
    else if(approved) {
        return(
            <div>
                <TransactionApproved user={user} transactions={transactions} setTransactions={setTransactions} />
            </div>
         );

    }
    else {
        return(
            <div>
                <TransactionCancelled user={user} transactions={transactions} setTransactions={setTransactions} />
            </div>
         );
    }
}

export default TransactionContent;