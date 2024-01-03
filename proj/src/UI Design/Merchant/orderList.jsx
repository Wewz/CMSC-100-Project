import React, { useState, useEffect } from "react";
import OrderListTitle from "../Transaction - Merchant/Merchantpage/orderListTitle";
import OrderListContent from "../Transaction - Merchant/Merchantpage/orderListContent";
import OrderDetails from "../Transaction - Merchant/Merchantpage/orderDetails";

const OrderList = () => {

  const [showDetails, setShowDetails] = useState(false);
  const [orderToShow, setOrderToShow] = useState(null);

  const [actionTaken, setActionTaken] = useState(false);

  const [all, setAll] = useState(true);
  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  return(
    <div className="flex w-[80%] flex-col px-28 pt-16 justify-center items-center pb-28">

        <OrderListTitle all={all} setAll={setAll} pending={pending} setPending={setPending} approved={approved} setApproved={setApproved} cancelled={cancelled} setCancelled={setCancelled} />
        <OrderListContent all={all} pending={pending} approved={approved} cancelled={cancelled} setOrderToShow={setOrderToShow} setShowDetails={setShowDetails} actionTaken={actionTaken} setActionTaken={setActionTaken} />
        <OrderDetails showDetails={showDetails} setShowDetails={setShowDetails} orderToShow={orderToShow} setActionTaken={setActionTaken} />
    </div>
  )
}

export default OrderList;
