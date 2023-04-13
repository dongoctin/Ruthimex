import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import BackTopButton from '../components/BackTopButton';

export default function Layout() {
    return (
        <div classname="container" style={{ marginTop: 20 }}>
            <Header />
            <Outlet />
            <Footer />

        </div>
    );
}
