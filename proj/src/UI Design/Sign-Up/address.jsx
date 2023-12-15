import React from "react";

function Address() {
    return(
        <div className="w-full">
            <div className="hidden xl:flex 2xl:flex flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="House Number" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Subdivision" required />
                <div className="mt-6 text-left" >
                    
                    <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Barangay" required />
                </div>

                <input type="text" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Municipality" required />

                <input type="text" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Province" required />
            </div>

            



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="House Number" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Subdivision" required />
                <div className="mt-6 text-left" >
                    <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Barangay" required />
                </div>

                <input type="text" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Municipality" required />

                <input type="text" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Province" required />
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="House Number" required />

                <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Subdivision" required />
                <div className="mt-6 text-left" >
                    <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Barangay" required />
                </div>

                <input type="text" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Municipality" required />

                <input type="text" id="search" class="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Province" required />
            </div>


            
        </div>
    );
}


export default Address;
