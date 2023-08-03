import React from 'react'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import xos from '../assets/xos.png'

const Home = () => {
    return (
        <>
            <img src={xos} alt="" className="back_xos" />
            <Nav />
            <Header />
            <Footer />

        </>
    )
}

export default Home