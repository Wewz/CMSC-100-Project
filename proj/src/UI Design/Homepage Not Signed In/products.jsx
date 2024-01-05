import React, {useState} from 'react';
import { RiProductHuntLine } from "react-icons/ri";

import ProductCarousel from './carousell';

const Product = () => {
 return(
    <div className="flex items-center justify-center">

        <div className="block items-center justify-center w-[80%]">


            <div className="w-full">
                <div className="hidden xl:flex 2xl:flex lg:flex md:flex items-center justify-center border-t border-[#2D4944] pt-20">
                    <div className="bg-[#2D4944] absolute mr-[155px] text-white p-5 rounded-xl h-20 w-20 flex items-center justify-center">
                        <RiProductHuntLine size={35} />
                    </div>

                    <div className="bg-white py-5 pr-5 pl-24 border border-[#2D4944] text-[#2D4944] font-semibold text-3xl rounded-xl">
                        <h2>Products</h2>
                    </div>
                </div>


                <div className="hidden xl:flex 2xl:flex lg:flex md:flex justify-between mt-24 w-[80%] ml-[10%]">
                    <div className="text-[#2D4944]">
                        <p className="text-sm">
                            <span className="font-medium text-xl">
                            Product List  </span>
                            — December 12, 2023
                        </p>
                    </div>

                </div>


                <div className="sm:flex xl:hidden lg:hidden 2xl:hidden md:hidden flex items-center justify-center border-t border-[#2D4944] pt-20">
                    <div className="bg-[#2D4944] z-20 absolute mr-[20%] text-white p-4 rounded-xl h-14 w-14 flex items-center justify-center">
                        <RiProductHuntLine size={35} />
                    </div>

                    <div className="bg-white py-3 pl-[60px] z-10 absolute border border-[#2D4944] text-[#2D4944] font-semibold text-lg rounded-lg w-[150px]">
                        <h2>Updates</h2>
                    </div>
                </div>


                <div className="sm:flex xl:hidden lg:hidden 2xl:hidden md:hidden flex items-center justify-between mt-24 w-[80%] ml-[10%]">
                    <div className="text-[#2D4944]">
                        <p className="text-[10px]">
                            <span className="font-medium text-sm">
                                Product List  </span>
                            — December 12, 2023
                        </p>
                    </div>

                </div>
                
                <ProductCarousel/>
            </div>


        </div>

    </div>
 );
}

export default Product;
