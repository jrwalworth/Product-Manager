import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom';
import './styles.css'

function Product(props) {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then((res) => {
            // console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then((res) => {
            navigate('/');
            console.log('Deleted:', res.data);
        })
        .catch(err => console.log('Error', err));
    }

    return (
        <div className='details'>
            <div>
                <h2 className="bg-dark text-light">{product.title}</h2>
                <div className="">
                    <div className="d-flex align-items-center">
                        <h4 className="p-2">Details: </h4>
                        <h5 className="p-2 ">{product.description}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <h4 className="p-2">Price: </h4>
                        <h5 className="p-2">${product.price}</h5>
                    </div>
                </div>
            </div>
            <div>
                <Link to={"/products/edit/" + product._id} className="btn btn-sm btn-outline-dark m-1" >Edit</Link>
                <button onClick={(e) => {deleteProduct(product._id)}} className="btn btn-sm btn-outline-dark m-1" >Delete</button>
            </div>
        </div>
    )
}

export default Product