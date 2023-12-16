import React from "react";

function Account( {user, setUser, newUser} ) {

    const {email, username, password } = user;

    return(
        <div className="w-full">

            <div className="hidden xl:flex 2xl:flex flex-col">
                <input type="email" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Email" required value={email} onChange={(e) => setUser({ ...user, email:e.target.value})} />
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Username" required value={username} onChange={(e) => setUser({ ...user, username:e.target.value})} />

                <input type="password" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required value={password} onChange={(e) => setUser({ ...user, password:e.target.value})} />

                <button class="bg-[#2D4944] hover:bg-[#62948b] mt-6 text-white font-semibold text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" onClick={newUser} > 
                    Sign Up
                </button>

            </div>

            



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">
                <input type="email" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Email" required value={email} onChange={(e) => setUser({ ...user, email:e.target.value})} />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Username" required value={username} onChange={(e) => setUser({ ...user, username:e.target.value})} />

                <input type="password" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required value={password} onChange={(e) => setUser({ ...user, password:e.target.value})} />

                <button class="bg-[#2D4944] hover:bg-[#62948b] mt-6 text-white font-semibold text-[12px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" onClick={newUser} > 
                    Sign Up
                </button>
            </div>


            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="email" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Email" required value={email} onChange={(e) => setUser({ ...user, email:e.target.value})} />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Username" required value={username} onChange={(e) => setUser({ ...user, username:e.target.value})} />

                <input type="password" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required value={password} onChange={(e) => setUser({ ...user, password:e.target.value})} />

                <button class="bg-[#2D4944] hover:bg-[#3d5c56] mt-6 text-white font-semibold text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" onClick={newUser} > 
                    Sign Up
                </button>
            </div>


            
        </div>
    );
}


export default Account;
