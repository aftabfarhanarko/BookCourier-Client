import React from 'react';
import Navbar from '../ui/Navbar';
import { Outlet } from 'react-router';
import Footer from '../ui/Footer';

const RenderOutlet = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RenderOutlet;