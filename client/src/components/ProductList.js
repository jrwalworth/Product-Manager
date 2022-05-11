import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function ProductList() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/products')
    //     .then((res) => {
    //         console.log(res.data);
    //         setProducts(res.data);
    //         console.log(products);
    //     })
    //     .catch((err) => console.log('Error getting products', err));
    // }, []);

    return (
        <div>Product List</div>
           /* { {
                products.map(product => (
                    <div key={product._id}>
                        <h2>Title: {product.title}</h2>
                        <h5>Description: {product.description}</h5>
                        <h5>Price: {product.price}</h5>
                        <Link to={`/product/${product._id}`}>Details</Link>
                    </div>
                ))
            }
        </div> }*/
    )
}

export default ProductList;