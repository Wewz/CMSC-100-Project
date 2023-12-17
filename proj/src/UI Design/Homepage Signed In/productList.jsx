import React, {useState, useEffect} from 'react';

const Products = () => {

    const [sortState, setSortState] = useState("none");
    const [ products, setProducts] = useState([])
    //const [ greeting, setGreeting ] = useState('')
    useEffect(() => {
    fetch('http://localhost:3001/get-product')
      .then(response => response.json())
      .then(body => {
    setProducts(body)
      })
    }, [])

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



            <div className="hidden xl:flex 2xl:flex lg:flex md:flex justify-between items-center text-center mt-24 w-[80%] ml-[10%] pb-7 border-b border-[#2D4944]">
                
                <div className="text-[#2D4944]">
                    <p className="text-sm">
                        <span className="font-semibold text-5xl mr-4">
                            Products  </span>
                        <span className="font-medium text-base"> Fresh </span>— December 18, 2023
                    </p>
                </div>

                <div className="flex gap-2 h-full">
                    <button className="bg-[#2D4944] font-bold h-10 w-24 text-sm text-white rounded-full p-1 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Default</button>
                    <button className="bg-white font-bold h-10 w-24 border border-[#2D4944] text-sm text-[#2D4944] rounded-full p-1 hover:bg-[#DCE0DC] hover:text-[#2D4944]">A-Z</button>
                    <button className="bg-white font-bold h-10 w-24 border border-[#2D4944] text-sm text-[#2D4944] rounded-full p-1 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Price Cost</button>
                    <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                        <option value="DEFAULT" disabled>None</option>
                        <option value="none" >Default</option>
                        <option value="ascendingtype">Ascending by type</option>
                        <option value="descendingtype">Descending by type</option>
                        <option value="ascendingquantity">Ascending by quantity</option>
                        <option value="descendingquantity">Descending by quantity</option>
                        <option value="ascendingname">Ascending by name</option>
                        <option value="descendingname">Descending by name</option>
                    </select>

                </div>
            </div>


            <div>
                {
                
                productDisplay(sortState).map((product, index) => (
                        <div key={product.ptitle}>
                            <div className="bg-white border border-[#2D4944] rounded-2xl flex flex-col ">

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

                            <button className="bg-[#2D4944] h-12 w-full mt-4 text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Buy Now</button>
                            <button></button>
                        </div>
                ))}
            </div>


        </div>
    );
}

export default Products;
