import React, {useState} from "react";

import NavBarSigned from "../UI Design/Homepage Signed In/newNav";
import NavBarNotSigned from "../UI Design/Homepage Not Signed In/navbar";
import SideNav from "../UI Design/Merchant/sideNav";

function MainNavBar({userLogged, setUserLogged, setUser, setMerchant, merchantLogged, setMerchantLogged, user}) {

    if(userLogged) {
        return (
            <div>
                <NavBarSigned userLogged={userLogged} setUserLogged={setUserLogged} user={user} />
            </div>
        );
    }
    else if(merchantLogged) {
        return (
        <div>
            <SideNav setMerchantLogged={setMerchantLogged} />
        </div>
        );
    }
    else {
        return (
            <div>
                <NavBarNotSigned userLogged={userLogged} setUserLogged={setUserLogged} setUser={setUser} setMerchant={setMerchant} setMerchantLogged={setMerchantLogged}/>
            </div>
        );
    }
}

export default MainNavBar;
