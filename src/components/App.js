import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homepage';
import Maps from './map';
import Sell from './sellform';
import Aboutus from './aboutus';
import SecondPage from './secondPage';
import '../style.css';
import Navbar from '../index.js';




function App(props) {

    // Your code start here

    let displayedData = [];
    // will add filter function in the future for processing more data
    displayedData = props.housedata;

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/Home' element={<Home displayedData={props.housedata} />} />
                <Route path='/' element={<Home displayedData={props.housedata} />} />
                <Route path='/Maps' element={<Maps displayedData={props.housedata} />} />
                <Route path='/Sell' element={<Sell />} />
                <Route path='/Aboutus' element={<Aboutus />} />
                <Route path='/SecondPage' element={<SecondPage />} />
            </Routes>

        </Router>



        // second page
    );
}

export default App;