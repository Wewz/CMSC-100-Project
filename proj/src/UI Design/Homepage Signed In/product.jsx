import React, {useState, useEffect} from 'react';

const Product = ({sortState, products, addCart}) => {


    const sortMethods = {
        none: { method: null},
        ascendingtype: { method: (a, b) => (a.ptype - b.ptype) },
        descendingtype: { method: (a, b) => (b.ptype - a.ptype) },
        ascendingquantity: { method: (a, b) => (a.quantity - b.quantity)},
        descendingquantity: { method: (a, b) => (b.quantity - a.quantity) },
        ascendingname: { method: (a, b) => (a.ptitle > b.ptitle ? 1 : -1)  },
        descendingname: { method: (a, b) => (a.ptitle > b.ptitle ? -1 : 1) },
    };

    const productDisplay = (sortstate) =>{
        if(sortstate ==="none"){
            return [...products];
        }else{
            return [...products].sort(sortMethods[sortstate].method);
        }
    }

    return(
        <div className="w-[70%] flex justify-center content-center items-center">
            <div className="flex-wrap flex gap-x-4 gap-y-14 justify-center content-center items-center w-[100%]">
                {productDisplay(sortState).map((product, index) => (
                    <div key={product.ptitle}>
                        <div className="bg-white border border-[#2D4944] rounded-2xl flex flex-col h-[280px] w-[280px]">

                            <div className="flex flex-col h-36 items-center justify-center">
                                <img className="object-cover object-center w-full h-full rounded-t-2xl" src={product.url} alt=""/>
                            </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-1 p-4 pl-6 truncate">
                                        <p className="text-[#2D4944] text-xl font-bold truncate ">{product.ptitle}</p>
                                        <p className="text-[#6b9089] text-xl font-bold truncate ">₱{product.price}.00</p>
                                        <p className="text-[#6b6b6b] text-base truncate">Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                        </div>

                        <button className="bg-[#2D4944] h-12 w-full mt-4 text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]"
                        onClick={(e) => addCart(product)} >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;