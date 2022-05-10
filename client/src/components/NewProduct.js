import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const navigate = useNavigate();
    const submitFormHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost/8000/api/products', {
            title, 
            description, 
            price
        })
        .then((res) => navigate('/'))
        .catch((err) => console.log('ERROR', err));
    };

    return (
        <form onSubmit={submitFormHandler} className="newProductForm">
            <section className='input-area d-flex'>
                <label  className='form-label col-3' htmlFor="">Title </label>
                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </section>
            <section className='input-area d-flex'>
                <label className="col-3" htmlFor="">Description </label>
                <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </section>
            <section className='input-area d-flex'>
                <label className="col-3" htmlFor="">Price </label>
                <input type="Number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </section>
            <input type="submit" className="btn btn-primary mt-3" />
        </form>
    )
}

export default NewProduct