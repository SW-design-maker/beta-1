import React, { useEffect, useState } from 'react'
import '../Footer/Footer.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const Footer = () => {

    const { t } = useTranslation();

    const [data, setData] = useState([]);

    const getApi = () => {
        axios
            .get("https://beta-bec.onrender.com/beta")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        getApi()
    }, [])


    return (
        <footer>
            <div className="container">
                <ul>
                    <p>{t("footer1")}</p>
                    {data.map((el) => {
                        return (
                            <NavLink to={`/card-info/${el._id}`} key={el._id}>
                                {el.title}
                            </NavLink>
                        )
                    })}
                </ul>
                <ul>
                    <p>{t("footer2")}</p>
                    <NavLink to="/about">
                        {t("footer3")}
                    </NavLink>
                    <NavLink to="/about/contact">
                        {t("footer4")}
                    </NavLink>
                </ul>
                <ul>
                    <p>{t("footer5")}</p>
                    <NavLink to="/about/delivery">
                        {t("footer6")}
                    </NavLink>
                    <NavLink to="/about/delivery">
                        {t("footer7")}
                    </NavLink>
                    <NavLink to="/about/delivery">
                        {t("footer8")}
                    </NavLink>
                </ul>
                <ul>
                    <p>{t("footer9")}</p>
                    <NavLink to="tel:+998909516535">
                        <i className="fa-solid fa-phone"></i>
                        +998 90 951 65 35
                    </NavLink>
                    <NavLink to="">
                        <i className="fa-brands fa-telegram"></i>
                        Telegram
                    </NavLink>
                    <NavLink to="">
                        <i className="fa-brands fa-instagram"></i>
                        Instagram
                    </NavLink>
                    <NavLink to="">
                        <i className="fa-brands fa-facebook-f"></i>
                        Facebook
                    </NavLink>
                    <NavLink to='https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.340331%2C41.298124&mode=usermaps&source=mapframe&um=constructor%3Acd59cad33786d9c807a01d682efd7dd34947b37f6f3b6a191fa122476ebd557a&utm_source=mapframe&z=18'>
                        <i className="fa-solid fa-location-dot"></i>
                        {t("footer10")}
                    </NavLink>
                </ul>
            </div >
        </footer >
    )
}

export default Footer