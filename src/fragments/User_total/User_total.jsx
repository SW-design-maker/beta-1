import React from 'react'
import '../User_total/User_total.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

const User_total = () => {
    return (
        <>
            <Nav />
            <div className="user_total">
                <div className="container">
                    <ul>
                        <NavLink to="/user/user_total" style={{ color: "#909090" }}>Mening hisobim</NavLink>
                        <NavLink to="/user/user_location">Yetkazish manzili</NavLink>
                    </ul>
                    <ul>
                        <h1>Mening tafsilotlarim</h1>
                        <p>Telefon</p>
                        <span>+998(90)951 65 35 <p>TELEFONNI O'ZGARTIRING</p></span>
                        <p>Ism</p>
                        <input type="text" placeholder='Sanjar' />
                        <p>Familiya</p>
                        <input type="text" placeholder='Shakarov' />
                        <button>Saqlash</button>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default User_total