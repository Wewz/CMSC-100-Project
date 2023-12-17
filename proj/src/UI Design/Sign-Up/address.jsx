import React from "react";

function Address(  {user, setUser} ) {

    const {hNum, subd, brg, muni, prov } = user;

    return(
        <div className="w-full">
            <div className="hidden xl:flex 2xl:flex flex-col">
                <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="House Number" required value={hNum} onChange={(e) => setUser({ ...user, hNum:e.target.value})} />

                <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Subdivision" required value={subd} onChange={(e) => setUser({ ...user, subd:e.target.value})} />
                <div className="mt-6 text-left" >
                    
                    <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Barangay" required value={brg} onChange={(e) => setUser({ ...user, brg:e.target.value})} />
                </div>

                <input type="text" className="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Municipality" required value={muni} onChange={(e) => setUser({ ...user, muni:e.target.value})} />

                <input type="text" className="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-m rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Province" required value={prov} onChange={(e) => setUser({ ...user, prov:e.target.value})} />
            </div>

            



            <div className="hidden lg:flex xl:hidden 2xl:hidden flex-col">
                <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="House Number" required value={hNum} onChange={(e) => setUser({ ...user, hNum:e.target.value})} />

                <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Subdivision" required value={subd} onChange={(e) => setUser({ ...user, subd:e.target.value})} />
                <div className="mt-6 text-left" >
                    <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Barangay" required value={brg} onChange={(e) => setUser({ ...user, brg:e.target.value})} />
                </div>

                <input type="text" className="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Municipality" required value={muni} onChange={(e) => setUser({ ...user, muni:e.target.value})} />

                <input type="text" className="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[12px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Province" required value={prov} onChange={(e) => setUser({ ...user, prov:e.target.value})} />
            </div>



            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden flex-col">
                <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-10 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="House Number" required value={hNum} onChange={(e) => setUser({ ...user, hNum:e.target.value})} />

                <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        mt-6 h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Subdivision" required value={subd} onChange={(e) => setUser({ ...user, subd:e.target.value})} />
                <div className="mt-6 text-left" >
                    <input type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                        placeholder="Barangay" required value={brg} onChange={(e) => setUser({ ...user, brg:e.target.value})} />
                </div>

                <input type="text" className="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                        h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Municipality" required value={muni} onChange={(e) => setUser({ ...user, muni:e.target.value})} />

                <input type="text" className="bg-white border mt-6 border-[#2D4944] text-[#2D4944] text-[13px] rounded-full
                    h-14 px-8 focus:border-[#507c74] w-full" 
                    placeholder="Province" required value={prov} onChange={(e) => setUser({ ...user, prov:e.target.value})} />
            </div>


            
        </div>
    );
}


export default Address;
