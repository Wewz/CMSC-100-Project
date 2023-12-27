import React, {useState, useEffect} from 'react';
import ProductTitle from './productTitle';
import Product from './product';
import Cart from './cart';

const Products = ({user}) => {

    const [ products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/get-product')
        .then(response => response.json())
        .then(body => {setProducts(body)})
    }, [])
    
    const [empty, setEmpty] = useState(true);
    const [sortState, setSortState] = useState("none");
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);
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
        console.log(basket);
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

    return(
        <div>

            <div className="block">

                <ProductTitle  setSortState={setSortState}/>

                <div className="flex items-center justify-center w-full h-full">
                    
                    <div className="w-[80%] mt-12 mb-24 flex">
                        
                        <Product sortState={sortState} products={products} addCart={addCart}  />

                        <Cart addCart={addCart} basket={basket} remove={remove} empty={empty} totalCost={totalCost} user={user} />

                    </div>
                </div>
            </div>



        </div>
    );
}

export default Products;
