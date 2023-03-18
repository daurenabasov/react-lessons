import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Header from "../Components/Layouts/Header/Header"

const RouteApp = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>

    );
};

export default RouteApp;