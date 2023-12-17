import React, {useState} from "react";

import NavBarSigned from "../UI Design/Homepage Signed In/newNav";
import NavBarNotSigned from "../UI Design/Homepage Not Signed In/navbar";

function MainNavBar({userLogged, setUserLogged, setUser, setMerchant, merchantLogged, setMerchantLogged}) {

    if(userLogged) {
        return (
            <div>
                <NavBarSigned userLogged={userLogged} setUserLogged={setUserLogged} />
            </div>
        );
    }
    else if(merchantLogged) {
        <div>
            eyeyeyeeyeyey
        </div>
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
