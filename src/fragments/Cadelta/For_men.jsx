import React from 'react'
import '../Cadelta/Desc_style.scss'
import { useTranslation } from 'react-i18next'

const For_men = () => {

    const { t } = useTranslation();

    return (
        <div className='desc_style for_men'>
            <b>
                Bio maral for MEN
            </b>
            <p>
                <span>
                    {t("for_men2")}
                </span>
                {t("for_men3")}
            </p>
            <b>
                {t("for_men4")}
            </b>
            <p>
                <span>
                    {t("for_men5")}
                </span>
                {t("for_men6")}
                <br />
                <br />
                <span>
                    {t("for_men7")}
                </span>
                {t("for_men8")}
                <br />
                <br />
                <span>
                    {t("for_men9")}
                </span>
                {t("for_men10")}
                <br />
                <br />
                <span>
                    {t("for_men11")}
                </span>
                {t("for_men12")}
                <br />
                <br />
                <span>
                    {t("for_men13")}
                </span>
                {t("for_men14")}
                <br />
                <br />
                <span>
                    {t("for_men15")}
                </span>
                {t("for_men16")}
                <br />
                <br />
                <span>
                    {t("for_men17")}
                </span>
                {t("for_men18")}
                <br />
                <br />
                а-
                <span>
                    {t("for_men19")}
                </span>
                {t("for_men20")}
                <br />
                <br />
                <span>
                    {t("for_men21")}
                </span>
                {t("for_men22")}
            </p>
            <b>
                {t("for_men23")}
            </b>
            <p>
                {t("for_men24")}
                <br />
                {t("for_men25")}
                <br />
                {t("for_men26")}
                <br />
                {t("for_men27")}
            </p>
            <b>
                {t("for_men28")}
            </b>
            <p>
                {t("for_men29")}
            </p>
            <b>
                {t("for_men30")}
            </b>
            <p>
                {t("for_men31")}
                <br />
                {t("for_men46")}
                <br />
                {t("for_men47")}
                <br />
                {t("for_men48")}
            </p>
            <b>
                {t("for_men32")}
            </b>
            <p>
                {t("for_men33")}
            </p>
            <ul>
                <b>
                    {t("for_men34")}
                </b>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_men35")}
                        </p>
                        <p className='number'>
                            100 {t("for_men44")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_men36")}
                        </p>
                        <p className='number'>
                            300 {t("for_men44")}
                        </p>
                    </li>
                </li>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_men37")}
                        </p>
                        <p className='number'>
                            20 {t("for_men44")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_men38")}
                        </p>
                        <p className='number'>
                            200 {t("for_men44")}
                        </p>
                    </li>
                </li>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_men39")}
                        </p>
                        <p className='number'>
                            10 {t("for_men44")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_men40")}
                        </p>
                        <p className='number'>
                            100 {t("for_men44")}
                        </p>
                    </li>
                </li>
                <li className='med'>
                    <li>
                        <p>
                            {t("for_men41")}
                        </p>
                        <p className='number'>
                            5 {t("for_men44")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {t("for_men42")}
                        </p>
                        <p className='number'>
                            100 {t("for_men44")}
                        </p>
                    </li>
                </li>
                <li className='med end'>
                    <p>
                        {t("for_men43")}
                    </p>
                    <p className='number'>
                        7,5 {t("for_men45")}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default For_men