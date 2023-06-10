import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Construction from './Construction';
import Auto from './Auto';
import Layout from '../../layout/Layout';
import Power from './Power';
import Water from './Water';
import Mechanical from './Mechanical';
import Consumer from './Consumer';

export default function AboutUs() {
    return (

        <Routes path='/' element={<Layout />}>
            <Route path='/construction' element={<Construction />} />
            <Route path='/auto' element={<Auto />} />
            <Route path='/power' element={<Power />} />
            <Route path='/water' element={<Water />} />
            <Route path='/mechanical' element={<Mechanical />} />
            <Route path='/consumer' element={<Consumer />} />

        </Routes>


    );
}
