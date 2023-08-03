import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import About_info from '../fragments/About_info/About_info'
import xos from '../assets/xos.png'
const About = () => {
    return (
        <>            <img src={xos} alt="" className="back_xos" />
            <Nav />
            <About_info />
            <Footer />
        </>
    )
}

export default About