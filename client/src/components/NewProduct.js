import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './styles.css'

const NewProduct = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
 
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title, 
            description, 
            price
        })
        .then((res) => {
            //add product to productlist
            setProducts([...products, res.data]);
            console.log('Added: ', res.data);
            //reset form fields
            setTitle('');
            setDescription('');
            setPrice(0);
            //navigate to home page after submission
            // navigate('/');
        })
        .catch((err) => {
            console.log('Error', err);
        });
    };

    return (
        <>
            <h3>Add a Product</h3>
            <form onSubmit={submitHandler} className="ProductForm">
                <section className='input-area d-flex align-items-center'>
                    <label  className='form-label col-3' htmlFor="title">Title </label>
                    <input className="form-control" type="text" value={title} name='title' onChange={(e) => setTitle(e.target.value)}/>
                </section>
                <section className='input-area d-flex align-items-center'>
                    <label className="col-3" htmlFor="description">Description </label>
                    <input className="form-control" type="text" value={description} name='description' onChange={(e) => setDescription(e.target.value)}/>
                </section>
                <section className='input-area d-flex align-items-center'>
                    <label className="col-3" htmlFor="price">Price ($)</label>
                    <input type="Number" className="form-control" value={price} name='price' onChange={(e) => setPrice(e.target.value)}/>
                </section>
                <input type="submit" value='Create' className="btn btn-primary mt-3" />
            </form>

        </>
    )
}

export default NewProduct;