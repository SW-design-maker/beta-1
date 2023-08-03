import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import '../About_contact/About_contact.scss'
import callcenter from '../../assets/call center.png'
import { useTranslation } from 'react-i18next'

const About_contact = () => {

    const { t } = useTranslation();

    return (
        <>
            <Nav />
            <div className='about_contact'>
                <p className="home">
                    <NavLink to="/">{t("about1")}</NavLink>
                    {t("about3")}
                </p>
                <div className="container">
                    <ul>
                        <NavLink to="/about" >{t("about2")}</NavLink>
                        <NavLink to="/about/contact" style={{ color: "#909090" }}>{t("about3")}</NavLink>
                        <NavLink to="/about/delivery">{t("about4")}</NavLink>
                    </ul>
                    <ul className='right'>
                        <h1>{t("about3")}</h1>
                        <img src={callcenter} alt="" />
                        <p>{t("about19")}</p>
                        <span>
                            {t("about20")}
                        </span>
                        <NavLink to='tel:+9989095165535'>
                            ☎️ +998 90 951 65 35
                        </NavLink>
                        <NavLink to="https://t.me/Belial_04"><i className="fa-brands fa-telegram"></i> @Belial_04</NavLink>
                        <span>
                            ⏰{t("about21")}
                        </span>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About_contact