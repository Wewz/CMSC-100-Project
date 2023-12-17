import React, {useState} from "react";

import NavBarSigned from "../UI Design/Homepage Signed In/newNav";
import NavBarNotSigned from "../UI Design/Homepage Not Signed In/navbar";

function MainNavBar({userLogged, setUserLogged, setUser}) {

    if(userLogged) {
        return (
            <div>
                <NavBarSigned userLogged={userLogged} setUserLogged={setUserLogged} />
            </div>
        );
    }
    else {
        return (
            <div>
                <NavBarNotSigned userLogged={userLogged} setUserLogged={setUserLogged} setUser={setUser} />
            </div>
        );
    }
}

export default MainNavBar;
