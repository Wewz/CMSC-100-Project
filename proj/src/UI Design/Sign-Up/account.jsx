import React from "react";

function Account() {
    return(
        <div className="w-full">
            <div className="hidden xl:flex 2xl:flex flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Username or Email" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required />

                <button class="bg-[#2D4944] hover:bg-[#62948b] mt-6 text-white font-semibold text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" > 
                    Sign Up
                </button>

            </div>

            



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Username" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Password" required />

                <button class="bg-[#2D4944] hover:bg-[#62948b] mt-6 text-white font-semibold text-[12px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" > 
                    Sign Up
                </button>
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Username" required />

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


export default Account;
