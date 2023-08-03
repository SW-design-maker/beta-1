import React from 'react'
import '../About_info/About_info.scss'
import { NavLink } from 'react-router-dom'
import about from '../../assets/about.png'
import { useTranslation } from 'react-i18next'

const About_info = () => {

    const { t } = useTranslation();

    return (
        <div className='about_info'>
            <p className="home">
                <NavLink to="/">{t("about1")}</NavLink>
                {t("about2")}
            </p>
            <div className="container">
                <ul>
                    <NavLink to="/about" style={{ color: "#909090" }}>{t("about2")}</NavLink>
                    <NavLink to="/about/contact">{t("about3")}</NavLink>
                    <NavLink to="/about/delivery">{t("about4")}</NavLink>

                </ul>
                <ul className='right'>
                    <h1>{t("about2")}</h1>
                    <img src={about} alt="" />
                    <p>{t("about5")}</p>
                    <span>
                        <b>ORCHIDEE PHARM </b>
                        {t("about6")}
                    </span>
                    <p>
                        {t("about7")}
                    </p>
                    <span>
                        {t("about8")}
                    </span>
                    <span>
                        <b>
                            {t("about9")}
                        </b>
                        {t("about10")}
                        <b>
                            {t("about11")}
                        </b>
                        {t("about12")}
                        <b>
                            {t("about13")}
                        </b>
                        {t("about14")}
                        <b>
                            {t("about15")}
                        </b>
                        {t("about16")}
                        <b>
                            {t("about17")}
                        </b>
                        {t("about18")}
                    </span>
                </ul>
            </div>
        </div >
    )
}

export default About_info