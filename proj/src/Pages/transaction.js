import React from "react";
import Transaction from "../UI Design/Transaction-User/transaction";

function TransactionPage({userLogged, user}) {

    if(!userLogged) return null
    else {
      return (
        <Transaction user={user} />
      );
    }
  }
  
  export default TransactionPage;
