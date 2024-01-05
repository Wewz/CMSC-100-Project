import React, { useState, useEffect } from "react";
import PaginationButtons from "../pagination/paginationButton";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import ProductInfo from "./productDetails";
import CreateProduct from "./createProduct";
import ConfirmDeleteProduct from "./confirmDeleteProduct";

const ProductList =({merchantLogged}) => {

    const [products, setProducts] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [prodcutToShow, setProductToShow] = useState(null);

    const [newProduct, setNewProduct] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [productToRemove, SetProductToRemove] = useState(null);

    const [actionTaken, setActionTaken] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [productPage, setProductPage] = useState([]);
    const [pageStart, setPageStart] = useState(0);
    const [pageEnd, setPageEnd] = useState(5);

    useEffect(() => {

        setPageCount(Math.ceil(products.length / 5));
        setProductPage(products.slice(pageStart, pageEnd));
    }, [products]);
    
      useEffect(() => {
        setProductPage(products.slice(pageStart, pageEnd));
    }, [pageStart, pageEnd]);


    const fetchProducts = async () => {
        try {
              const response = await fetch('http://localhost:3001/get-product');

              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const data = await response.json();
              setProducts(data);
          } 
          catch (error) {
              console.error('Error fetching users:', error.message);
          }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {

        if(!actionTaken) return;

        fetchProducts();
        setActionTaken(false);
    }, [actionTaken]);


    const handleShowDetails = (product) => {
        setProductToShow(product)
        setShowDetails(true);
    }
    
    const handlePageClick = (event) => {
        setPageEnd((event.selected + 1) * 5);
        setPageStart(((event.selected + 1) * 5) - 5);
    }


    const handleDeleteProduct = async () => {
        
        const pid = productToRemove.pid;

        try {
          const response = await fetch('http://localhost:3001/delete-product', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ pid }),
          });
    
          const data = await response.json();

          console.log(data.message);
          setActionTaken(true);
        } 
        catch (error) {
            console.error('Error deleting basket:', error);
        }
    };

    useEffect(() => {

        if(!deleteProduct) return;
        handleDeleteProduct();
    }, [deleteProduct]);

    const confirmDelete = (product) => {
        setShowConfirm(true);
        SetProductToRemove(product);
    }


    if(!merchantLogged) return null

    return(
        <div className="flex w-[80%] flex-col px-28 pt-16 justify-center items-center">

            <div className="flex items-center border-b border-[#2D4944] mb-16 w-[90%] relative">

                <Link to="/" className="flex"> 
                    <div className="flex text-white bg-[#2D4944] font-semibold gap-2 cursor-pointer mb-3 absolute bottom-0 left-0 p-2 text-xs rounded-xl hover:bg-[#dadada] justify-center items-center">
                        <FaArrowLeftLong size={15} />
                        Dashboard
                    </div>
                </Link>

                <h1 className="text-[#2D4944] ml-28 p-4 font-bold text-4xl">Products</h1>

                <div className="w-[15%] absolute right-0 bottom-0 mb-3">
                    <div className="flex text-white bg-[#2D4944] cursor-pointer gap-2 p-2 text-xs rounded-xl hover:bg-[#50726b] justify-center items-center w-[90%]"
                    onClick={(e) => setNewProduct(true)}>
                        <FaPlus size={15} />
                        Add New Product
                    </div>
                </div>
            </div>

            <div className="w-[90%] flex flex-col justify-center content-center items-center gap-y-5 pb-24">
                    {productPage.map((product) => (
                        <div key={product.pid} className="w-full">
                            <div className="bg-white border border-[#2D4944] rounded-2xl flex items-center text-center justify-center p-5 font-bold text-sm relative overflow-hidden">

                                <div className="absolute left-0 flex flex-col items-center justify-center w-[15%] h-full">
                                    <img className="object-cover object-center w-full h-full" src={product.url} alt=""/>
                                </div>

                                <div className="w-[15%]">
                                </div>

                                <div className="flex flex-col p-4 truncate text-[#2D4944] w-[15%]">
                                    <p className="text-[#999999] font-semibold">Product ID: </p>
                                    <p className="truncate">{product.pid}</p>
                                </div>

                                <div className="flex flex-col p-4 truncate text-[#2D4944] w-[15%]">
                                    <p className="text-[#999999] font-semibold">Product Name: </p>
                                    <p className="truncate">{product.ptitle}</p>
                                </div>

                                <div className="flex flex-col p-4 truncate text-[#2D4944] w-[15%]">
                                    <p className="text-[#999999] font-semibold">Price: </p>
                                    <p className="truncate">₱{product.price}.00</p>
                                </div>

                                <div className="flex flex-col p-4 truncate text-[#2D4944] w-[15%]">
                                    <p className="text-[#999999] font-semibold">Quantity in Stock: </p>
                                    <p className="truncate">{product.quantity}</p>
                                </div>

                                <div className="w-[12.5%]">
                                    <div className="flex text-white bg-[#2D4944] cursor-pointer p-2 text-xs rounded-xl hover:bg-[#50726b] justify-center items-center w-[90%]"
                                    onClick={(e) => confirmDelete(product)}>
                                        Remove Product
                                    </div>
                                </div>

                                <div className="w-[12.5%]">
                                    <div className="flex text-[#2D4944] bg-white border border-[#2D4944] cursor-pointer p-2 text-xs rounded-xl hover:bg-[#dadada] justify-center items-center w-[90%]"
                                    onClick={(e) => handleShowDetails(product)} >
                                        Product Details
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                <PaginationButtons pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>

            <ProductInfo showDetails={showDetails} setShowDetails={setShowDetails} prodcutToShow={prodcutToShow} setActionTaken={setActionTaken} />
            <CreateProduct newProduct={newProduct} setNewProduct={setNewProduct} setActionTaken={setActionTaken} />
            <ConfirmDeleteProduct showConfirm={showConfirm} setShowConfirm={setShowConfirm} setDeleteProduct={setDeleteProduct} />

        </div>
    );
}

export default ProductList;