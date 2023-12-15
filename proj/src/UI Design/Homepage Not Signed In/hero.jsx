import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";

const Hero = () => {

    return(
        <div>

            <div className="hidden xl:flex bg-transparent items-center justify-between px-20 pt-3 mx-auto">
                <div className="w-[70%] pl-28">

                    <h1 className="text-[#2D4944] p-4 font-normal text-5xl mb-12">
                        Directly from the fields to your doorstep
                    </h1>

                    <form className="flex ml-4 mt-4">   

                        <button type="submit" className="absolute px-10 py-2 h-14 ms-2 text-white bg-[#2D4944] rounded-full 
                            hover:bg-[#77AC6F]">
                            <FaSearch size={20} />
                        </button>

                        <div className="h-24">
                            <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                                pl-28 pr-10 h-14 ms-2 focus:border-[#507c74] w-full" 
                                placeholder="Search product name..." required />
                        </div>
                    </form>

                    <p className="text-[#2D4944] mt-5 pl-6">
                        An e-commerce website used by the 
                        <span className="font-semibold"> Department of Agriculture (DA) </span>
                        to facilitate transactions 
                        between farmers and customers
                    </p>


                </div>

                <div className="w-[1500px]">
                    <img className="" src={require('../assets/Farmer.png')} alt="Logo" />
                </div>

            </div>


            <div className="hidden sm:hidden xl:hidden md:block lg:block bg-transparent items-center justify-center px-48 pt-3 mx-auto">
                <div className="text-center">

                    <h1 className="text-[#2D4944] p-4 font-normal text-5xl my-12">
                        Directly from the fields to your doorstep
                    </h1>

                    <form className="flex justify-center ml-4 mt-4">   

                        <button type="submit" className="absolute px-10 py-2 h-14 mr-[280px] text-white bg-[#2D4944] rounded-full 
                            hover:bg-[#77AC6F]">
                            <FaSearch size={20} />
                        </button>

                        <div className="h-24">
                            <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-m rounded-full
                                pl-28 pr-10 h-14 ms-2 focus:border-[#507c74] w-full" 
                                placeholder="Search product name..." required />
                        </div>
                    </form>

                    <p className="text-[#2D4944] my-5 pl-6">
                        An e-commerce website used by the 
                        <span className="font-semibold"> Department of Agriculture (DA) </span>
                        to facilitate transactions 
                        between farmers and customers
                    </p>


                </div>

                <div className="w-[100%]">
                    <img className="" src={require('../assets/Farmer.png')} alt="Logo" />
                </div>
            </div>

            <div className="sm:block lg:hidden md:hidden xl:hidden bg-transparent items-center justify-center px-20 pt-3 mx-auto">
                
                <div className="text-center">
                    <h1 className="text-[#2D4944] p-4 font-normal text-4xl mt-12">
                        Directly from the fields to your doorstep
                    </h1>

                    <form className="flex justify-center ml-4 mt-4">   

                        <button type="submit" className="absolute px-6 py-2 h-10 mr-[222px] text-white bg-[#2D4944] rounded-full 
                            hover:bg-[#77AC6F]">
                            <FaSearch size={15} />
                        </button>

                        <div className="mb-4">
                            <input type="text" id="search" class="bg-white border border-[#2D4944] text-[#2D4944] text-xs rounded-full
                                pl-16 pr-10 h-10 focus:border-[#507c74] w-full" 
                                placeholder="Search product name..." required />
                        </div>
                    </form>

                    <p className="text-[#2D4944] mt-2 mb-5 pl-6 text-sm">
                        An e-commerce website used by the 
                        <span className="font-semibold"> Department of Agriculture (DA) </span>
                        to facilitate transactions 
                        between farmers and customers
                    </p>
                </div>

                <img className="w-[450px] m-auto" src={require('../assets/Farmer.png')} alt="Logo" />
            </div>

        </div>
    );
}

export default Hero;
