import React, {useState, useEffect, useRef} from 'react';
import ProductTitle from './productTitle';
import Product from './product';
import Cart from './cart';
import CurrentCart from './currentCart';
import ProductDetails from './productDetails';

const Products = ({user}) => {

    const isInitialRender = useRef(true);

    const [ products, setProducts] = useState([]);
    const [seeCart, setSeeCart] = useState(false);
    const [empty, setEmpty] = useState(true);
    const [sortState, setSortState] = useState("none");
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [searching, setSearching] = useState(false);
    const [seeProduct, setSeeProduct] = useState(false);
    const [productToSee, setProductToSee] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/get-product')
        .then(response => response.json())
        .then(body => {setProducts(body)})
    }, [])

    const fetchBasket = async () => {
        try {

            console.log("Fetching basket...");
            const response = await fetch(`http://localhost:3001/getBasket/${user.username}/${user.email}`);
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
    
            const contentType = response.headers.get("content-type");
    
            if (contentType && contentType.includes("application/json")) {

                const data = await response.json();

                if (data.success) {
                    setBasket(data.basket.product);

                    setEmpty(false);
                    const temp = data.basket.product;
                    let tempTotal = 0;
                    let tempTotalCost = 0;

                    for(let i=0; i<temp.length; i++) {
                        tempTotal += temp[i].count;
                        tempTotalCost += (temp[i].count * temp[i].addedProduct.price);
                    }

                    setTotalCost(tempTotalCost);
                    setTotal(tempTotal);

                } else {
                    console.log(data.message);
                    console.log("Failed");
                }
            } else {
                throw new Error(`Invalid content type: ${contentType}`);
            }
        } 
        catch (error) {
            console.error("Error fetching basket:", error);
        }
    }

    const handleSaveBasket = async () => {
        const username = user.username;
        const email = user.email;
        const product = basket;

        try {

            const response = await fetch('http://localhost:3001/save-basket', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({ username, email, product }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Basket saved successfully:', data.product);
            } else {
                console.log('Failed to save basket:', data.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error saving basket:', error);
        }
    };

    const handleDeleteBasket = async () => {
        
        const username = user.username;
        const email = user.email;

        try {
          const response = await fetch('http://localhost:3001/delete-basket', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ username, email }),
          });
    
          const data = await response.json();

          console.log(data.message);

        } catch (error) {
            console.error('Error deleting basket:', error);
        }
    };

    useEffect(() => {
        if (isInitialRender.current) {
            fetchBasket();
            isInitialRender.current = false;
            return;
        }

        if(basket.length === 0) {
            handleDeleteBasket();
            return;
        }
    
        handleSaveBasket();
    }, [basket]);

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

        console.log(basket)
        setTotalCost(totalCost + product.price);
        setTotal(total+1);
    }

    const addCart2 = (product, quantity) => {
        
        let exist = false;

        if(total === 0) setEmpty(false);

        for(let i=0; i<basket.length; i++) {

            if(product.ptitle.localeCompare(basket[i].addedProduct.ptitle) === 0) {
                const nextList = [...basket];
                nextList[i].count += quantity;
                setBasket(nextList);
                exist = true;
                break;
            }
        }

        if(!exist) {
            const newData = {addedProduct: product, count: quantity, key: product.ptitle + " " + basket.length }
            setBasket([...basket, newData]);
        }

        console.log(basket)
        setTotalCost(totalCost + (product.price * quantity));
        setTotal(total+quantity);
    }

    const emptyBasket = () => {
        setEmpty(true);
        setBasket([]);
        setTotal(0);
        setTotalCost(0);
        setSeeCart(false);
    }

    const remove = (p) => {

        if(total === 1) {
            setEmpty(true);
            setSeeCart(false);
        }

        setTotal(total-1);
        p.count -= 1;

        if(p.count === 0) {
            setBasket(basket.filter(a => a.key !== p.key));
        }

        setTotalCost(totalCost - p.addedProduct.price);
        console.log("Remove " + p.addedProduct.ptitle + " " + p.key);
    }

    const removeProduct = (p) => {

        if(basket.length === 1) {
            setEmpty(true);
            setSeeCart(false);
        }

        setTotal(total-p.count);
        setBasket(basket.filter(a => a.key !== p.key));
        setTotalCost(totalCost - (p.addedProduct.price * p.count));
        console.log("Remove " + p.addedProduct.ptitle + " " + p.key);
    }

    return(
        <div>

            <div className="block">

                <ProductTitle  setSortState={setSortState} setProducts={setProducts} setSearching={setSearching}/>

                <div className="flex items-center justify-center w-full h-full">
                    
                    <div className="w-[80%] mt-12 mb-24 flex">
                        
                        <Product sortState={sortState} products={products} addCart={addCart} searching={searching} setSeeProduct={setSeeProduct} setProductToSee={setProductToSee} />

                        <Cart basket={basket} empty={empty} totalCost={totalCost} user={user} setSeeCart={setSeeCart} emptyBasket={emptyBasket} />

                    </div>
                </div>


            </div>

            <CurrentCart seeCart={seeCart} setSeeCart={setSeeCart} basket={basket} total={total} addCart={addCart} remove={remove} totalCost={totalCost} removeProduct={removeProduct} />
            <ProductDetails seeProduct={seeProduct} setSeeProduct={setSeeProduct} productToSee={productToSee} addCart2={addCart2} />

        </div>
    );
}

export default Products;
