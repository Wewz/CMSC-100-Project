import React from "react";
import { useEffect, useState } from 'react';
function Info() {
    const [fname, setfName] = useState("");
    const [mname, setmName] = useState("");
    const [lname, setlName] = useState("");
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:3001/add-user', {
			method: "post",
			body: JSON.stringify({ fname,mname,lname, email,password,type }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
            setfName("");
            setmName("");
            setlName("");
			setEmail("");
            setPassword("");
            setType("");
		}
	}
    return(
        <div className="w-full">
            <div className="hidden xl:flex 2xl:flex flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required  value={fname} onChange={(e) => setfName(e.target.value)} />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Middle Name" required value={mname} onChange={(e) => setmName(e.target.value)} />
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required value={lname} onChange={(e) => setlName(e.target.value)} />
                <div className="mt-6 text-left" >
                    <label className="ml-6 text-[12px] text-[#9c9d9c] font-normal" >Birthday</label>
                    <input type="date" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Birthday" required />
                </div>

                <input type="tel" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Phone Number" required />

                <input type="email" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required />
                <div className="mt-6 text-left" >
                    <label className="ml-6 text-[12px] text-[#9c9d9c] font-normal" >Birthday</label>
                    <input type="date" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Birthday" required />
                </div>

                <input type="tel" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Phone Number" required />

                <input type="email" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Middle Name" required />
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required />
                <div className="mt-6 text-left" >
                    <label className="ml-6 text-[12px] text-[#9c9d9c] font-normal" >Birthday</label>
                    <input type="date" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Birthday" required />
                </div>

                <input type="tel" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Phone Number" required />

                <input type="email" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Email Address" required />
            </div>


            <div className="hidden xl:flex 2xl:flex flex-col">

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button class="bg-[#2D4944] hover:bg-[#62948b] mt-6 text-white font-semibold text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" onClick={handleOnSubmit}> 
                    Sign Up
                </button>

            </div>

            



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button class="bg-[#2D4944] hover:bg-[#62948b] mt-6 text-white font-semibold text-[12px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" > 
                    Sign Up
                </button>
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required />

                <button class="bg-[#2D4944] hover:bg-[#3d5c56] mt-6 text-white font-semibold text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" > 
                    Sign Up
                </button>
            </div>


            
        </div>
        
    );
}


export default Info;
