import React, { useState, useEffect } from "react";


const UserList = ({merchantLogged}) => {
    console.log("UserList component rendered");

    if(!merchantLogged) return null;
    else {
        return(
            <div>
                {
                <div className="flex items-center border-b border-[#2D4944] border-opacity-40 mb-14">
                    <h1 className="text-[#a2a2a2] p-4 font-bold text-3xl">User List
                    </h1>
                </div>
                }

            </div>
        );
    }
}

export default UserList;
