import React from 'react'
import '../User_menu/User_menu.scss'
import { useTranslation } from 'react-i18next'

const User_menu = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className='user_menu'>
                <div className="container">
                    <h1>{t("user1")}</h1>
                    <input type="text" placeholder={t("user3")} />
                    <input type="text" placeholder={t("user4")} />
                    <input type="email" placeholder={t("user5")} />
                    <input type="text" placeholder='+998(__)___-__-__ ' />
                    <button>{t("user2")}</button>
                </div>
            </div>
            <div className="container" style={{ padding: "0 0 50px" }}>
            </div>
        </>
    )
}

export default User_menu