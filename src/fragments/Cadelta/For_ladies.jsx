import React from 'react'
import { useTranslation } from 'react-i18next'

const For_ladies = () => {

    const { t } = useTranslation();

    return (
        <div className='desc_style for_men for_ladies'>
            <b>
                {t("for_ladies1")}
            </b>
            <p>
                <span>
                    Bio maral for Ladies
                </span>
                {t("for_ladies2")}
            </p>
            <b>
                {t("for_ladies3")}
            </b>
            <p>
                <span>
                    {t("for_ladies4")}
                </span>
                {t("for_ladies5")}
                <br />
                <br />
                <span>
                    {t("for_ladies6")}
                </span>
                {t("for_ladies7")}
                <br />
                <br />
                <span>
                    {t("for_ladies8")}
                </span>
                {t("for_ladies9")}
                <br />
                <br />
                <span>
                    {t("for_ladies10")}
                </span>{t("for_ladies11")}
                <br />
                <br />
                <span>
                    {t("for_ladies12")}
                </span>
                {t("for_ladies13")}
                <br />
                <br />
                {t("for_ladies14")}
                <br />
                <br />
                <span>
                    {t("for_ladies15")}
                </span>
                {t("for_ladies16")}
                <br />
                <br />
            </p>
            <b>
                {t("for_ladies17")}
            </b>
            <p>
                {t("for_ladies18")}
                <br />
                {t("for_ladies19")}
                <br />
                {t("for_ladies20")}
                <br />
                {t("for_ladies21")}
                <br />
                {t("for_ladies22")}
                <br />
                {t("for_ladies23")}
                <br />
                {t("for_ladies24")}
                <br />
                {t("for_ladies25")}
            </p>
            <b>
                {t("for_ladies26")}
            </b>
            <p>
                {t("for_ladies27")}
            </p>
            <b>
                {t("for_ladies28")}
            </b>
            <p>
                {t("for_ladies29")}
                <br />
                {t("for_ladies30")}
                <br />
                {t("for_ladies31")}
                <br />
                {t("for_ladies32")}
            </p>
            <b>
                {t("for_ladies33")}
            </b>
            <p>
                {t("for_ladies34")}
            </p>
            <ul>
                <b>
                    {t("for_ladies35")}
                </b>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_ladies36")}
                        </p>
                        <p className='number'>
                            50 {t("for_ladies43")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_ladies37")}
                        </p>
                        <p className='number'>
                            200 {t("for_ladies43")}
                        </p>
                    </li>
                </li>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_ladies38")}
                        </p>
                        <p className='number'>
                            5 {t("for_ladies43")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_ladies39")}
                        </p>
                        <p className='number'>
                            100 {t("for_ladies43")}
                        </p>
                    </li>
                </li>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_ladies40")}
                        </p>
                        <p className='number'>
                            50 {t("for_ladies43")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_ladies41")}
                        </p>
                        <p className='number'>
                            50 {t("for_ladies43")}
                        </p>
                    </li>
                </li>
                <li className='med end'>
                    <p>
                        {t("for_ladies42")}
                    </p>
                    <p className='number'>
                        7,5 {t("for_ladies44")}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default For_ladies