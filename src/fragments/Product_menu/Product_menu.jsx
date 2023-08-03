import React from 'react'
import '../Product_menu/Product_menu.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next'
import Cadelta from '../Cadelta/Cadelta'
import For_men from '../Cadelta/For_men'
import For_ladies from '../Cadelta/For_ladies'
import Cadelta_total from '../Cadelta/Cadelta_total'

const Product_menu = () => {

    const { _id } = useParams();

    const { addItem, removeItem, getItem } = useCart();

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

    const { t, use } = useTranslation();

    useEffect(() => {
        getApi()
    }, [])

    const newData = data.filter((el) => el._id === _id)
    const newCadelta = data.filter((el) => el._id === "64a7fd43e46294112f837662")

    let total = 0;

    return (
        <>
            {newData?.map((el) => {
                const priceCount = el.count * el.price;
                total += priceCount;

                return (
                    <div className='product_menu' key={el._id}>
                        <div className="container menu_container">
                            <h1 className='left'>
                                <img src={el.image} alt="" />
                                {t("product_menu1")}
                            </h1>
                            <ul className="right">
                                <button className='xit'>{t("card1")}</button>
                                <h1>{el.title}</h1>
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    {t("product_menu2")}
                                </li>
                                <span>
                                    {t("product_menu3")}
                                    <p>
                                        {el.brend}
                                    </p>
                                </span>
                                <ul>
                                    <b>
                                        {el.price} {t("shop9")}
                                    </b>

                                    {!getItem(el._id) ? (
                                        <>
                                            <button className='add' onClick={() => addItem({ ...el, id: el._id, count: el.count, price: el.price, image: el.image })}>{t("card2")}</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='add' onClick={() => removeItem(el._id)}>{t("card3")}</button>
                                        </>
                                    )}
                                </ul>
                            </ul>
                        </div>
                        <div className="container">
                            <div className="text">
                                <h1>{t("product_menu4")}</h1>
                                {el._id === "64a7fd43e46294112f837662" ?
                                    (
                                        <>
                                            <Cadelta />
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                                {el._id === "64a80abdfa66b165ef3edd99" ?
                                    (
                                        <>
                                            <For_men />
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                                {el._id === "64a80b1bfa66b165ef3edd9e" ?
                                    (
                                        <>
                                            <For_ladies />
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                                {el._id === "64a80dfbfa66b165ef3edda7" ?
                                    (
                                        <>
                                            <Cadelta_total />
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div >
                )
            })}
        </>
    )
}

export default Product_menu