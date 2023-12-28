import React, {useState, useEffect} from 'react';
import { FaSearch } from "react-icons/fa";

const ProductTitle = ({setSortState}) => {

    const [ products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/get-product')
        .then(response => response.json())
        .then(body => {setProducts(body)})
    }, [])

    const [search, setSearch] = useState([]);

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
    
        if (searchQuery === '') {
            setSearch([]);
            return false;
        }
    
        setSearch(products.filter(product => product.ptitle.toLowerCase().includes(searchQuery)).slice(0, 8));
    }

    const setSearchText = (title) => {
        setSearch([]);

        document.getElementById('search-product').value = title;
    }

    return(
        <div className="flex justify-between items-center mt-24 w-[80%] ml-[10%] pb-7 border-b border-[#2D4944]">
                    
            <div className="text-[#2D4944] block">
                <p className="text-sm">
                    <span className="font-semibold text-5xl mr-4">
                        Products  </span>
                    <span className="font-medium text-base"> Fresh </span>— December 18, 2023
                </p>
            </div>

            <div className="w-[25%] relative">
                    <div className=" relative h-16 mt-1 w-full flex justify-center text-center items-center">
                        <button type="submit" className="absolute px-4 py-1 w-20 h-12 mr-[150px] text-white bg-[#2D4944] rounded-full 
                            hover:bg-[#77AC6F] flex justify-center items-center left-0">
                            <FaSearch size={17} />
                        </button>

                        <input id="search-product" type="text" className="bg-white border border-[#2D4944] text-[#2D4944] text-sm rounded-full
                            pl-[25%] pr-2 h-12 focus:border-[#507c74] w-full truncate" 
                            placeholder="Search product..."  onChange={(e) => handleSearch(e)} />
                    </div>

                    {
                        search.length > 0 && (
                            <div className="absolute flex flex-col bg-white border border-[#2D4944] rounded-2xl w-full gap-1 text-[#2D4944] text-[15px]">
                                {
                                    search.map(s => (
                                        <span className="hover:bg-[#e1e3e1] py-2 px-4 rounded-2xl cursor-pointer" onClick={(e) => setSearchText(s.ptitle)} >{s.ptitle}</span>
                                    ))
                                }
                            </div>
                        )
                    }

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