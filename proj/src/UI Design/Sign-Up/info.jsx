import React from "react";
import { useEffect, useState } from 'react';

function Info( {user, setUser} ) {

    const { fname, lname, bday, phone} = user;

    return(
        <div className="w-full">


            <div className="hidden xl:flex 2xl:flex flex-col">

                <input type="text" id="search" class="bg-white border mt-10 border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required  value={fname} onChange={(e) => setUser({ ...user, fname:e.target.value})} />

                <input type="text" id="search" class="bg-white mt-6 border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required value={lname} onChange={(e) => setUser({ ...user, lname:e.target.value})} />

                <div className="mt-6 text-left" >
                    <label className="mt-6 text-left ml-6 text-[12px] text-[#9c9d9c] font-normal" >Birthday</label>
                    <input type="date" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Birthday" required value={bday} onChange={(e) => setUser({ ...user, bday:e.target.value})} />
                </div>

                <input type="tel" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Phone Number" required value={phone} onChange={(e) => setUser({ ...user, phone:e.target.value})} />
            </div>     



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required value={fname} onChange={(e) => setUser({ ...user, fname:e.target.value})} />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required value={lname} onChange={(e) => setUser({ ...user, lname:e.target.value})} />

                <div className="mt-6 text-left" >
                    <label className="ml-6 text-[12px] text-[#9c9d9c] font-normal" >Birthday</label>
                    <input type="date" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Birthday" required value={bday} onChange={(e) => setUser({ ...user, bday:e.target.value})} />
                </div>

                <input type="tel" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Phone Number" required value={phone} onChange={(e) => setUser({ ...user, phone:e.target.value})} />
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required value={fname} onChange={(e) => setUser({ ...user, fname:e.target.value})} />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required value={lname} onChange={(e) => setUser({ ...user, lname:e.target.value})} />
                <div className="mt-6 text-left" >
                    <label className="ml-6 text-[12px] text-[#9c9d9c] font-normal" >Birthday</label>
                    <input type="date" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Birthday" required value={bday} onChange={(e) => setUser({ ...user, bday:e.target.value})} />
                </div>

                <input type="tel" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Phone Number" required value={phone} onChange={(e) => setUser({ ...user, phone:e.target.value})} />
            </div>

            
        </div>
        
    );
}


export default Info;
