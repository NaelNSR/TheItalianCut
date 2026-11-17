import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>THE ITALIAN CUT</h2>
                <p>ITALIAN CUISINE</p>
            </div>

            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/Menu'>Menu</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contactus'>Contact Us</Link>
                <Link to='/Cart'>Cart</Link>
            </div>
        </div>
    );
}

export default Navbar;