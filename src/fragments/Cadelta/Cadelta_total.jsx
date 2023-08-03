import React from 'react'
import '../Cadelta/Desc_style.scss'
import { useTranslation } from 'react-i18next'


const Cadelta_total = () => {

  const { t } = useTranslation();

  return (
    <div className='desc_style cadelta'>
      <b>{t("cadelta1")}</b>
      <p>
        {t("total_1")}
      </p>
      <b>{t("cadelta3")}</b>
      <p>
        {t("total_2")}
      </p>
      <b>
        {t("total_3")}
      </b>
      <p>
        {t("total_4")}
      </p>
      <b>{t("cadelta7")}</b>
      <p>
        {t("total_5")}
        <br />
        {t("total_6")}
        <br />
        {t("total_7")}
        <br />
        {t("total_8")}
        <br />
        {t("total_16")}
        <br />
        {t("total_9")}
        <br />
        {t("total_10")}
        <br />
        {t("total_11")}
        <br />
      </p>
      <b>{t("cadelta18")}</b>
      <p>
        {t("total_12")}
        <br />
        {t("total_13")}
        <br />
        {t("total_14")}
        <br />
      </p>
      <b>
        {t("cadelta23")}
      </b>
      <p>
        {t("total_15")}
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
            500 {t("cadelta26")}
          </p>
        </li>
        <li>
          <p>
            {t("cadelta27")}
          </p>
          <p>
            500 {t("cadelta26")}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Cadelta_total