import React from 'react'
import '../Info/Info.scss'
import { useTranslation } from 'react-i18next'

const Info = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='info'>
                <p>
                    {t("info1")}
                    <span>
                        {t("info2")}
                    </span>
                    {t("info5")}
                    <span>
                        {t("info6")}
                    </span>
                    {t("info7")}
                    <span>
                        {t("info8")}
                    </span>
                    {t("info9")}
                    <span>
                        {t("info10")}
                    </span>
                    <span>
                        {t("info11")}
                    </span>
                </p>
            </div>
        </>
    )
}

export default Info