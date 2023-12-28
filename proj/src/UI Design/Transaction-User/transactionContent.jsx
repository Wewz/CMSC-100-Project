import React, { useState} from "react";
import TransactionAll from "./transactionAll";
import TransactionPending from "./transactionPending";
import TransactionApproved from "./transactionApproved";

const TransactionContent = ({all, pending, user}) => {

    if(all) {
        return(
            <div>
                <TransactionAll user={user} />
            </div>  
        );
    }
    else if(pending) {
        return(
            <div>   
                <TransactionPending user={user} />
            </div>
        );
    }
    else {
        return(
            <div>
                <TransactionApproved user={user} />
            </div>
        );
    }
}

export default TransactionContent;
