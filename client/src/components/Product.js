import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './styles.css'

function Product(props) {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);

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
                <button className="btn btn-outline-dark m-1">Edit</button>
                <button className="btn btn-outline-dark m-1">Delete</button>
            </div>
        </div>
    )
}

export default Product