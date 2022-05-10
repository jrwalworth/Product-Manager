import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom';
import './styles.css'

function Header() {
    return (
        <>
            <Navbar className="m-2 d-flex justify-content-between" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand className="ms-3" href="#home">Product Manager</Navbar.Brand>
            </Navbar>
            <div className="d-flex justify-content-center align-items-center">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <span> | </span>
                <NavLink className="nav-link" to="/new">Add a Product</NavLink>
            </div>
        </>
        
    );
}

export default Header;
