import React, {useState} from 'react';
// import axios from 'axios';
import NewProduct from '../components/NewProduct';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = (personId) => {
        setProducts(products.filter(product => product._id != personId));
    }

    return (
        <div>
            <NewProduct products = {products} setProducts = {setProducts} />
            <hr />
            <ProductList products = {products} setProducts = {setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;