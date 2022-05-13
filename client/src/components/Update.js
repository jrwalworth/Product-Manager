import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';
import './styles.css'

function Update(props) {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setPrice(res.data.price);
        })
        .catch(err => console.log('Error', err));
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            title, 
            description, 
            price
        })
        .then((res) => {
            //add updated product to productlist
            // setProducts([...products, res.data]);
            console.log('Updated: ', res.data);
        
            //navigate to home page after submission
            navigate('/');
        })
        .catch((err) => {
            console.log('Error', err);
        });
    };


    return (
        <div className='details'>
            <h3>Update Product</h3>
            <form onSubmit={updateProduct} className="ProductForm">
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
                <input type="submit" value='Update' className="btn btn-primary mt-3" />
            </form>
            <Link to='/'>Return Home</Link>

        </div>
    )
}

export default Update;