import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Portifolio from './Components/Portifolio';
import Messages from "./Components/Messages"

function Apps () {
    return <Routes>
        <Route path="/" element={<Portifolio />} />
        <Route path="/messages" element={<Messages />} />
    </Routes>
}

export default Apps 