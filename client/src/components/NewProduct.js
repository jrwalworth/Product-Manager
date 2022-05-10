import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const NewProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const navigate = useNavigate();



    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title, 
            description, 
            price
        })
        .then((res) => {
            //log response data
            console.log(res);
            console.log(res.data);
            //reset form fields
            setTitle('');
            setDescription('');
            setPrice('');
            //navigate to home page after submission
            navigate('/');
        })
        .catch((err) => {
            console.log('Error', err);
        });
    };

    return (
        <form onSubmit={submitHandler} className="newProductForm">
            <section className='input-area d-flex'>
                <label  className='form-label col-3' htmlFor="title">Title </label>
                <input className="form-control" type="text" value={title} name='title' onChange={(e) => setTitle(e.target.value)}/>
            </section>
            <section className='input-area d-flex'>
                <label className="col-3" htmlFor="description">Description </label>
                <input className="form-control" type="text" value={description} name='description' onChange={(e) => setDescription(e.target.value)}/>
            </section>
            <section className='input-area d-flex'>
                <label className="col-3" htmlFor="price">Price </label>
                <input type="Number" className="form-control" value={price} name='price' onChange={(e) => setPrice(e.target.value)}/>
            </section>
            <input type="submit" value='Create' className="btn btn-primary mt-3" />
        </form>
    )
}

export default NewProduct;