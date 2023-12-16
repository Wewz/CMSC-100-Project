import React, {useState} from "react";

import NavBarSigned from "../UI Design/Homepage Signed In/newNav";
import NavBarNotSigned from "../UI Design/Homepage Not Signed In/navbar";

function MainNavBar({userLogged, setUserLogged}) {

    if(userLogged) {
        return (
            <div>
                <NavBarSigned />
            </div>
        );
    }
    else {
        return (
            <div>
                <NavBarNotSigned />
            </div>
        );
    }
}

export default MainNavBar;
