import React, {useState} from 'react';

const Products = () => {

    return(
        <div>
        


            <div className="hidden xl:flex 2xl:flex lg:flex md:flex justify-between items-center text-center mt-24 w-[80%] ml-[10%] pb-7 border-b border-[#2D4944]">
                
                <div className="text-[#2D4944]">
                    <p className="text-sm">
                        <span className="font-semibold text-5xl mr-4">
                            Products  </span>
                        <span className="font-medium text-base"> Fresh </span>— December 18, 2023
                    </p>
                </div>

                <div className="flex gap-2 h-full">
                    <button className="bg-[#2D4944] h-10 w-24 text-sm text-white rounded-full p-1 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Default</button>
                    <button className="bg-[#2D4944] h-10 w-24 text-sm text-white rounded-full p-1 hover:bg-[#DCE0DC] hover:text-[#2D4944]">A-Z</button>
                    <button className="bg-[#2D4944] h-10 w-24 text-sm text-white rounded-full p-1 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Price Cost</button>
                </div>
            </div>


        </div>
    );
}

export default Products;
