import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Cart from './components/Cart.js';
import History from './components/History.js';
import Navbar from './components/Navbar.js';

function App() {
    const [historyImg, setHistoryImg] = useState([]);
    const [cart, setCart] = useState([]);
    const addToCart = (image) => {
        setCart([...cart, { image, price: 0, quantity: 1 }]);
    };

    return (
        <center>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home addToCart={addToCart} />} />
                    <Route exact path='/history' element={<History historyImg={historyImg} setHistoryImg={setHistoryImg} />} />
                    <Route exact path='/cart' element={<Cart cartItems={cart} />} />
                </Routes>

            </Router>
        </center>
    );
}

export default App;
