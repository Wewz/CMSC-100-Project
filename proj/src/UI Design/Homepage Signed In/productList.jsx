import React, {useState, useEffect} from 'react';

import { FaArrowRightLong } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import { TbMinus } from "react-icons/tb";

const Products = () => {


    const [ products, setProducts] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3001/get-product')
      .then(response => response.json())
      .then(body => {
    setProducts(body)
      })
    }, [])


    const [transaction, setTransaction] = useState({
        tid: "", 
        pid: "", 
        quantity: "", 
        status: "",
        email: "",
	    date: "",
    });

    const [sortState, setSortState] = useState("none");
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);
    const [empty, setEmpty] = useState(true);
    const [totalCost, setTotalCost] = useState(0);

    const addCart = (product) => {

        let exist = false;

        if(total === 0) setEmpty(false);

        for(let i=0; i<basket.length; i++) {

            if(product.ptitle.localeCompare(basket[i].addedProduct.ptitle) === 0) {
                const nextList = [...basket];
                nextList[i].count++;
                setBasket(nextList);
                exist = true;
                break;
            }
        }

        if(!exist) {
            const newData = {addedProduct: product, count: 1, key: product.ptitle + " " + basket.length }
            setBasket([...basket, newData]);
        }

        setTotalCost(totalCost + product.price);

        setTotal(total+1);
        console.log(total);
        console.log("Added " + product.ptitle + " to the cart"); 
    }

    const remove = (p) => {

        if(total === 1) setEmpty(true);

        setTotal(total-1);
        p.count -= 1;

        if(p.count === 0) {
            setBasket(basket.filter(a => a.key !== p.key));
        }

        setTotalCost(totalCost - p.addedProduct.price);

        console.log("Remove " + p.addedProduct.ptitle + " " + p.key);
    }



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
        <div>

            <div className="hidden lg:block 2xl:block xl:block">
                <div className="hidden xl:flex 2xl:flex lg:flex md:flex justify-between items-center text-center mt-24 w-[80%] ml-[10%] pb-7 border-b border-[#2D4944]">
                    
                    <div className="text-[#2D4944] hidden 2xl:block xl:block">
                        <p className="text-sm">
                            <span className="font-semibold text-5xl mr-4">
                                Products  </span>
                            <span className="font-medium text-base"> Fresh </span>— December 18, 2023
                        </p>
                    </div>

                    <div className="text-[#2D4944] hidden lg:block 2xl:hidden xl:hidden">
                        <p className="text-xs">
                            <span className="font-semibold text-4xl mr-4">
                                Products  </span>
                            <span className="font-medium text-sm"> Fresh </span>— December 18, 2023
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

                <div className="flex items-center justify-center w-full h-full">
                    
                    <div className="w-[80%] mt-12 mb-24 flex">
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

        

                        <div className="w-[30%]">
                            <div className="border border-[#2D4944] rounded-3xl p-6 w-full text-[#2D4944] flex flex-col">
                                <h1 className="font-bold text-lg">Order Summary</h1>

                                {!empty ?
                                    <div className="my-6">



                                        <div className="flex-col gap-y-2 my-3 border-b border-[#2D4944] pb-4 hidden 2xl:flex xl:flex">
                                            {
                                                basket.map((p) => (
                                                    <div key={p.key} className="flex justify-between px-4">
                                                        
                                                        <div className="w-[50%] truncate">
                                                            <p className="truncate">{p.addedProduct.ptitle}</p>
                                                        </div>

                                                        <div className="flex w-[50%] justify-between">

                                                            <div className="flex text-sm mr-2"> 
                                                                <button className="bg-[#2D4944] text-white rounded-l-md p-1 hover:bg-[#77AC6F]"
                                                                onClick={(e) => remove(p)} >
                                                                    <TbMinus size={15} />
                                                                </button>

                                                                <p className="px-2 w-10 flex justify-center items-center text-center border-y border-[#2D4944] border-opacity-40">{p.count}</p>

                                                                <button className="bg-[#2D4944] text-white rounded-r-md p-1 hover:bg-[#77AC6F]"
                                                                onClick={(e) => addCart(p.addedProduct)} >
                                                                    <HiPlusSm size={15} />
                                                                </button>
                                                            </div>
            
                                                            <p>₱{p.addedProduct.price}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div> 



                                        <div className="flex-col gap-y-2 my-3 border-b border-[#2D4944] pb-4 hidden 2xl:hidden xl:hidden lg:flex">
                                            {
                                                basket.map((p) => (
                                                    <div key={p.key} className="flex justify-between px-4 text-sm">
                                                        
                                                        <div className="w-[50%] truncate">
                                                            <p className="truncate">{p.addedProduct.ptitle}</p>
                                                        </div>

                                                        <div className="flex w-[50%] justify-between">

                                                            <div className="flex text-sm mr-2"> 
                                                                <button className="bg-[#2D4944] text-white rounded-l-md p-1 hover:bg-[#77AC6F]"
                                                                onClick={(e) => remove(p)} >
                                                                    <TbMinus size={12} />
                                                                </button>

                                                                <p className="px-2 w-7 flex justify-center items-center text-center border-y border-[#2D4944] border-opacity-40">{p.count}</p>

                                                                <button className="bg-[#2D4944] text-white rounded-r-md p-1 hover:bg-[#77AC6F]"
                                                                onClick={(e) => addCart(p.addedProduct)} >
                                                                    <HiPlusSm size={12} />
                                                                </button>
                                                            </div>
            
                                                            <p>₱{p.addedProduct.price}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div> 
                                        


                                        <div className="flex justify-between px-4 font-bold">
                                            <div> 
                                                Total Cost:
                                            </div>

                                            <div> 
                                                ₱{totalCost}
                                            </div>
                                        </div>

                                    </div>

                                    :
                                    <div className="flex justify-center items-center text-center my-10">
                                        <p className="font-bold text-2xl text-[#b1b1b1]">Empty basket</p>
                                    </div>
                                }

                                <button className="bg-white h-12 border border-[#2D4944] w-full mt-4 text-[#2D4944] rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944] flex justify-between content-center items-center">
                                    Basket
                                    <FaArrowRightLong size={15} />
                                </button>

                                <button className="bg-[#2D4944] h-12 w-full mt-4 text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944] flex justify-between content-center items-center">
                                    Payment
                                    <FaArrowRightLong size={15} />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>













            






        </div>
    );
}

export default Products;
