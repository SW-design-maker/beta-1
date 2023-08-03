import React, { useEffect, useState } from 'react'
import '../Card/Card.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';

const Card = () => {

    const { getItem, addItem, removeItem } = useCart();

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


    useEffect(() => {
        getApi()
    }, [])

    const { t } = useTranslation();

    return (
        <>
            {data?.map((el) => {
                return (
                    <div className="card" key={el._id}>
                        <NavLink to={`/card-info/${el._id}`}>
                            <img src={el.image} alt="" />
                        </NavLink>
                        <div className="text">
                            <button className='xit'>{t("card1")}</button>
                            <NavLink to={`/card-info/${el._id}`} className='desc'>
                                {el.title}
                            </NavLink>
                            <b>{el.price} {t("shop9")}</b>
                            {!getItem(el._id) ? (
                                <button className='shop' onClick={() => addItem({ ...el, id: el._id, count: el.count, price: el.price, image: el.image })}>{t("card2")}</button>
                            ) : (
                                <button className='shop' onClick={() => removeItem(el._id)}>{t("card3")}</button>
                            )}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card