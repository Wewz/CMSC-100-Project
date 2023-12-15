import React from "react";

function Info() {
    return(
        <div className="w-full">
            <div className="hidden xl:flex 2xl:flex flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Last Name" required />
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
                    placeholder="Email Address" required />
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
                    placeholder="Email Address" required />
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="First Name" required />

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


            
        </div>
    );
}


export default Info;
