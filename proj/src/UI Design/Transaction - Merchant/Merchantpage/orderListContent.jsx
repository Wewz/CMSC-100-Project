import React, { useState, useEffect } from "react";

import OrderListAll from "./orderListAll";
import OrderListPending from "./orderListPending";
import OrderListApproved from "./orderListApproved";
import OrderListCancelled from "./orderListCancelled";

const OrderListContent = ({all, pending, approved, cancelled, setOrderToShow, setShowDetails, actionTaken, setActionTaken}) => {

    const [transactions, setTransactions] = useState([]);

    if(all) {
        return(
            <OrderListAll transactions={transactions} setTransactions={setTransactions} setOrderToShow={setOrderToShow} setShowDetails={setShowDetails} actionTaken={actionTaken} setActionTaken={setActionTaken} />
         );

    }
    else if(pending) {
        return(
            <OrderListPending transactions={transactions} setTransactions={setTransactions} setOrderToShow={setOrderToShow} setShowDetails={setShowDetails} actionTaken={actionTaken} setActionTaken={setActionTaken} />
         );

    }
    else if(approved) {
        return(
            <OrderListApproved transactions={transactions} setTransactions={setTransactions} setOrderToShow={setOrderToShow} setShowDetails={setShowDetails} actionTaken={actionTaken} setActionTaken={setActionTaken} />
         );

    }
    else {
        return(
            <OrderListCancelled transactions={transactions} setTransactions={setTransactions} setOrderToShow={setOrderToShow} setShowDetails={setShowDetails} actionTaken={actionTaken} setActionTaken={setActionTaken} />
         );
    }
}

export default OrderListContent;