import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Product_menu from '../fragments/Product_menu/Product_menu'
import xos from '../assets/xos.png'

const Menu = () => {
    return (
        <>
            <img src={xos} alt="" className="back_xos" />

            <Nav />
            <Product_menu />
            <Footer />
        </>
    )
}

export default Menu