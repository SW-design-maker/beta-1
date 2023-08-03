import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import '../About_delivery/About_delivery.scss'
import delivery from '../../assets/delivery.png'
import { useTranslation } from 'react-i18next'

const About_delivery = () => {

    const { t } = useTranslation();

    return (
        <>
            <Nav />
            <div className="about_delivery">
                <p className="home">
                    <NavLink to="/">{t("about1")}</NavLink>
                    {t("about4")}
                </p>
                <div className="container">
                    <ul>
                        <NavLink to="/about" >{t("about2")}</NavLink>
                        <NavLink to="/about/contact">{t("about3")}</NavLink>
                        <NavLink to="/about/delivery" style={{ color: "#909090" }}>{t("about4")}</NavLink>
                    </ul>
                    <ul className='right'>
                        <h1>{t("about4")}</h1>
                        <img src={delivery} alt="" />
                        <p>{t("about22")}</p>
                        <span>
                            <b>
                                {t("about23")}
                            </b>
                            {t("about24")}
                            <br />
                            <br />
                            {t("about25")}
                            <br />
                            <br />
                        </span>
                        <p>{t("about26")}</p>
                        <span>
                            {t("about27")}
                            <br />
                            <br />
                            {t("about28")}
                            <br />
                            <br />
                            {t("about29")}
                            <br />
                            <br />
                            {t("about30")}
                            <br />
                            <br />
                            {t("about31")}
                            <br />
                            {t("about32")}
                            <b>
                                {t("about33")}
                            </b>
                            {t("about34")}
                            <br />
                            {t("about35")}
                            <b>
                                {t("about36")}
                            </b>
                            {t("about37")}
                            <br />
                            {t("about38")}
                            <br />
                            {t("about39")}
                            <br />
                            <br />
                            {t("about40")}
                            <b>

                                {t("about41")}
                            </b>
                            <br />
                            <b>
                                {t("about42")}
                            </b>
                            {t("about43")}
                            <br />
                            <br />

                            {t("about44")}
                            <b>
                                {t("about45")}<a href="tel: +998909516535">+998 90 951-65-35</a>{t("about46")}
                            </b>
                        </span>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About_delivery