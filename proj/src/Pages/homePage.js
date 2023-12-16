import React, { useState } from "react";

import RootNotSigned from "./RootNotSigned";
import RootSigned from "./RootSigned";

function Home({userLogged, setUserLogged}) {

    if(userLogged) {
        return (
            <div>
                <RootSigned />
            </div>
        );
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
