import React from 'react';
import { UserProvider } from './UserComp.jsx/UserContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fruits from './UserComp.jsx/Fruits';
import Vegetables from './UserComp.jsx/Vegetable';
import Washi from './UserComp.jsx/Washi';
import Grocery from './UserComp.jsx/Grocery';
import Footer from './UserComp.jsx/Footer';
import Home from './UserComp.jsx/Home';
import Header from './UserComp.jsx/Header';
import Cart from './UserComp.jsx/Cart';
import Diary from './UserComp.jsx/Diary';
import Form from './UserComp.jsx/Form';
import Login from './UserComp.jsx/Login';

export default function App() {
  return (
    <Router>
      <UserProvider>
    <div className="backgrnd">
    <Header />
        <div className='carding'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruits" element={<Fruits/>} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/washi" element={<Washi />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/diary" element={<Diary/>} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
        <Footer />
        </div>
        </UserProvider>
    </Router>
  );
}
