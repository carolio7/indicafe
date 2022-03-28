import React from 'react';
import Footer from './Footer/Footer';
import './Layout.css';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';

const Layout = () => {
    const renderLayout = () => {
        <div className='layout'>
            <h3>south park</h3>
            <NavBar/>
            <Main/>
            <Footer/>
        </div>        
    }

    return (
        <div>
            {renderLayout()}
            <h3>tagada</h3>
        </div>
    )
}

export default Layout
