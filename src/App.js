import { useState } from 'react';

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import About from './Pages/About.jsx';
import Contactus from './Pages/Contactus.jsx';
import Cart from './Pages/Cart.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const newCart = cartItems.filter((item, i) => i !== index);
        setCartItems(newCart);
    };

    return (
        <div className='app'>
            <Router>
                <Navbar></Navbar>

             <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Menu" element={<Menu addToCart={addToCart} />}></Route>
                 <Route path="/About" element={<About />}></Route>
                <Route path="/Contactus" element={<Contactus />}></Route>
                    <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}></Route>
                </Routes>

             <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;