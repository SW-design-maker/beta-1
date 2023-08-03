import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import User_shop from '../fragments/User_shop/User_shop'
import xos from '../assets/xos.png'

const User = () => {
    return (
        <>
            <img src={xos} alt="" className="back_xos" />
            <Nav />
            <User_shop />
            <Footer />
        </>
    )
}

export default User