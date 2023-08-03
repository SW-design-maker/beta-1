import React from 'react'
import '../Nav/Nav.scss'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom'
import Безимени from '../../assets/Без имени-1.png'
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next'


const Nav = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const { items, isEmpty } = useCart()

    return (
        <nav>
            <div className="container">
                <ul className='left'>
                    <NavLink to="/about">
                        {t("nav1")}
                    </NavLink>
                    <NavLink to="/about/delivery">
                        {t("nav2")}
                    </NavLink>
                </ul>
                <ul>
                    <a href='/'>
                        <img src={Безимени} alt="" />
                    </a>
                </ul>
                <ul className='right'>
                    <NavLink to="/shop" className='cart'>
                        {isEmpty ? (
                            <i className="fa-solid fa-cart-shopping"></i>
                        ) : (
                            <i className="fa-solid fa-cart-shopping add"></i>
                        )}
                    </NavLink>
                    <input type="checkbox" id="check1" />
                    <label htmlFor="check1" className='check1'>
                        {t("nav4")}
                        <ul>
                            <p onClick={() => changeLanguage("uz")}>
                                <img src="https://maxway.uz/images/uz.svg" alt="" />
                                O'zbekcha
                            </p>
                            <p onClick={() => changeLanguage("rus")}>
                                <img src="https://maxway.uz/images/ru.svg" alt="" />
                                Русский
                            </p>
                            <p onClick={() => changeLanguage("eng")}>
                                <img src="https://maxway.uz/images/en.svg" alt="" />
                                English
                            </p>
                        </ul>
                    </label>
                </ul>

                <ul className='bars'>
                    <NavLink to="/shop" className='cart'>
                        {isEmpty ? (
                            <i className="fa-solid fa-cart-shopping"></i>
                        ) : (
                            <i className="fa-solid fa-cart-shopping add"></i>
                        )}
                    </NavLink>
                    <i className="fa-solid fa-bars" onClick={toggleDrawer}></i>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        className='bla bla bla jojo'
                    >
                        <i className="fa-solid fa-xmark" onClick={toggleDrawer}></i>
                        <a href='/'>
                            <img src={Безимени} alt="" />
                        </a>
                        <NavLink to="/about">
                            {t("nav1")}
                        </NavLink>
                        <NavLink to="/about/delivery">
                            {t("nav2")}
                        </NavLink>
                        <input type="checkbox" id="check2" />
                        <label htmlFor="check2" className='check2'>
                            {t("nav4")}
                            <ul>
                                <p onClick={() => changeLanguage("uz")}>
                                    <img src="https://maxway.uz/images/uz.svg" alt="" />
                                    O'zbekcha
                                </p>
                                <p onClick={() => changeLanguage("rus")}>
                                    <img src="https://maxway.uz/images/ru.svg" alt="" />
                                    Русский
                                </p>
                                <p onClick={() => changeLanguage("eng")}>
                                    <img src="https://maxway.uz/images/en.svg" alt="" />
                                    English
                                </p>
                            </ul>
                        </label>
                    </Drawer>
                </ul>
            </div>
        </nav >
    )
}

export default Nav