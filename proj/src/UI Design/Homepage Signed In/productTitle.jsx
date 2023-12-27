import React, {useState, useEffect} from 'react';

const ProductTitle = ({setSortState}) => {

    return(
        <div className="flex justify-between items-center text-center mt-24 w-[80%] ml-[10%] pb-7 border-b border-[#2D4944]">
                    
            <div className="text-[#2D4944] block">
                <p className="text-sm">
                    <span className="font-semibold text-5xl mr-4">
                        Products  </span>
                    <span className="font-medium text-base"> Fresh </span>— December 18, 2023
                </p>
            </div>

            <div className="flex gap-2 h-full pt-3">
                <p className="flex justify-center items-end pb-1 text-center text-xs font-semibold text-[#2D4944]">Sort Products: </p>
                <select defaultValue={'DEFAULT'} className="bg-white font-bold h-10 w-56 border border-[#2D4944] text-sm text-[#2D4944] rounded-full p-2"
                onChange={(e) => setSortState(e.target.value)}>
                    <option value="none" >Default</option>
                    <option value="ascendingtype">Ascending by Type</option>
                    <option value="descendingtype">Descending by Type</option>
                    <option value="ascendingquantity">Ascending by Quantity</option>
                    <option value="descendingquantity">Descending by Quantity</option>
                    <option value="ascendingname">Ascending by Name</option>
                    <option value="descendingname">Descending by Name</option>

                </select>

            </div>
        </div>
    );
}

export default ProductTitle;