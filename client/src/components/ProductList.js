import {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './styles.css'


const ProductList = (props) => {
    const {products, setProducts} = props;
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => console.log('Error getting products', err));
    }, []);
    console.log('products:', products);
    
    return (
        <>
            <h3>All Products</h3>
            <div className="container grid">
                
                {  products &&
                    products.map((product, index) => (
                        <div key={index} className="card">
                            <h3 className="card-title">{product.title}</h3>
                            <p>
                                Description: {product.description}
                            </p>
                            <h5>$ {product.price}</h5>
                            <Link to={`products/${product._id}`}>{product.title} details...</Link>
                        </div>
                    )) 
                }

            </div> 
        </>
    )
}

export default ProductList;