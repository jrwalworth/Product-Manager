import {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './styles.css'


const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => console.log('Error getting products', err));
    }, []);
    // console.log('products:', products);
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then((res) => {
            removeFromDom(productId)
        })
        .catch(err => console.log('Error', err));
    }


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
                            <div>
                            <Link to={"/products/edit/" + product._id} className="btn btn-sm btn-outline-dark m-1" >Edit</Link>
                            <button onClick={(e) => {deleteProduct(product._id)}} className="btn btn-sm btn-outline-dark m-1" >Delete</button>
                            </div>
                        </div>
                    )) 
                }

            </div> 
        </>
    )
}

export default ProductList;