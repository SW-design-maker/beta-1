import React from 'react'
import '../User_location/User_location.scss'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import { NavLink } from 'react-router-dom'

const User_location = () => {
    return (
        <>
            <Nav />
            <div className='user_location'>
                <div className="container">
                    <ul>
                        <NavLink to="/user/user_total">Mening hisobim</NavLink>
                        <NavLink to="/user/user_location" style={{ color: "#909090" }}>Yetkazish manzili</NavLink>
                    </ul>
                    <ul>
                        <h1>Manzillar Kitobi</h1>
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            YANGI MANZIL QO'SHISH
                        </button>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default User_location