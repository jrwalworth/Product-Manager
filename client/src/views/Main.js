import React, {useState} from 'react';
// import axios from 'axios';
import NewProduct from '../components/NewProduct';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');

    return (
        <div>
            <NewProduct products = {products} setProducts = {setProducts} />
            <hr />
            <ProductList products = {products} setProducts = {setProducts} />
        </div>
    )
}

export default Main;