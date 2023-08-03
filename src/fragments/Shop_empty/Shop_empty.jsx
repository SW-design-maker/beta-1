import React from 'react'
import '../Shop_empty/Shop_empty.scss'
import { NavLink } from 'react-router-dom'
import Безимени from '../../assets/Без имени-1.png'
import { useTranslation } from 'react-i18next'

const Shop_empty = () => {

    const { t } = useTranslation();

    return (
        <div className='shop_empty'>
            <div className="container">
                <div className="item">
                    <img src={Безимени} alt="" />
                    <b>
                        {t("shop1")}
                    </b>
                    <p>
                        {t("shop2")}
                    </p>
                    <NavLink to="/">
                        {t("shop3")}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Shop_empty