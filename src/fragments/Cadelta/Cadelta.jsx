import React from 'react'
import '../Cadelta/Desc_style.scss'
import { useTranslation } from 'react-i18next'

const Cadelta = () => {

    const { t } = useTranslation();

    return (
        <div className='desc_style cadelta'>
            <b>{t("cadelta1")}</b>
            <p>
                {t("cadelta2")}
            </p>
            <b>{t("cadelta3")}</b>
            <p>
                {t("cadelta4")}
            </p>
            <b>{t("cadelta5")}</b>
            <p>
                {t("cadelta6")}
            </p>
            <b>{t("cadelta7")}</b>
            <p>
                {t("cadelta8")}
                <br />
                {t("cadelta9")}
                <br />
                {t("cadelta10")}
                <br />
                {t("cadelta11")}
                <br />
                {t("cadelta12")}
                <br />
                {t("cadelta13")}
                <br />
                {t("cadelta14")}
                <br />
                {t("cadelta15")}
                <br />
            </p>
            <b>{t("cadelta18")}</b>
            <p>
                {t("cadelta19")}
                <br />
                {t("cadelta20")}
                <br />
                {t("cadelta21")}
                <br />
                {t("cadelta22")}
            </p>
            <b>
                {t("cadelta23")}
            </b>
            <p>
                {t("cadelta24")}
            </p>
            <ul>
                <b>
                    {t("cadelta25")}
                </b>
                <li>
                    <p>
                        {t("cadelta3")}
                    </p>
                    <p>
                        150 {t("cadelta26")}
                    </p>
                </li>
                <li>
                    <p>
                        {t("cadelta27")}
                    </p>
                    <p>
                        350 {t("cadelta26")}
                    </p>
                </li>
                <li>
                    <p>
                        {t("cadelta28")}
                    </p>
                    <p>
                        25 {t("cadelta26")}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Cadelta