import React, { useState } from "react";

import RootNotSigned from "./RootNotSigned";
import RootSigned from "./RootSigned";
import DashBoard from "../UI Design/Merchant/dashBoard";

function Home({userLogged, setUserLogged, merchantLogged, setMerchantLogged, user}) {

    if(userLogged) {
        return (
            <div>
                <RootSigned user={user}  />
            </div>
        );
    }
    if(merchantLogged) {
        return(
        <div>
            <DashBoard />
        </div>)
        ;
    }
    else {
        return (
            <div>
                <RootNotSigned />
            </div>
        );
    }
}

export default Home;
