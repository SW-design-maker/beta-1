import React, { useState } from 'react'
import '../Shop_add/Shop_add.scss'
import { useCart } from 'react-use-cart';
import { NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Shop_add = () => {

    const { items, updateItemQuantity, removeItem, emptyCart } = useCart();
    let total = 0;

    const [fio, setFio] = useState("");
    const [category, setCategory] = useState("");
    const [phone_number, setPhonenumber] = useState("");


    const createDevice = (e) => {
        e.preventDefault();
        axios
            .post("https://r-contact-backend.onrender.com/api/users/", {
                fio: fio,
                category: category,
                phone_number: phone_number,
            })
            .then((res) => {
                console.log(res.data);
                alert("Device created!");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const postTest = () => {
        axios.post(
            `https://api.telegram.org/bot6105553670:AAEqlItJ8zxHQ25fF8u5dsD4Hy4ecOe01Nk/sendMessage?chat_id=-1001831092010&text=${encodeURIComponent(
                `<b>Zakazlar:</b>
    ${items.map((item) => {
                    return `                    
Mahsulot nomi: ${item.title}
                     
Mahsulot narxi: ${item.price} UZS
                    
Jami mahsulot soni : ${item.count} ta`;

                })
                    .join("")}        

Mijoz ismi: ${fio}
            
Mijoz telefon nomeri: ${category}
            
Mijoz manzili: ${phone_number}

<b>Jami zakaz:</b> ${total} UZS`
            )}&parse_mode=html`
        )
            .then(() => {
                window.location.reload();
            })
    };

    const { t } = useTranslation();

    return (
        <div className='shop_add'>
            <div className="container">
                <h1>{t("shop4")}</h1>
                <div className="card_all">
                    <div className="left">
                        {items?.map((item) => {
                            const priceCount = item.count * item.price;
                            total += priceCount;

                            if (item.count >= 1) {
                                return (
                                    <div className="card" key={item._id}>
                                        <a to="">
                                            <img src={item.image} alt="" />
                                        </a>
                                        <div className="text">
                                            <button className='xit'>XIT</button>
                                            <a to="" className='desc'>
                                                {item.title}
                                            </a>
                                            <b>{item.price} {t("shop9")}
                                                <button>
                                                    <p
                                                        onClick={() =>
                                                            updateItemQuantity(item.id, item.count--)
                                                        }
                                                    >
                                                        -
                                                    </p>
                                                    <h3>{item.count}</h3>
                                                    <p
                                                        onClick={() =>
                                                            updateItemQuantity(item.id, item.count++)
                                                        }
                                                    >
                                                        +
                                                    </p>
                                                </button>
                                            </b>
                                        </div>

                                    </div>
                                );
                            } else {
                                removeItem(item.id);
                            }
                        })}
                    </div>
                    <div className="right_all">
                        <div className="right_top">
                            <p style={{ fontSize: "20px" }}>Siz bilan bo'lanish uchun</p>
                            <p>
                                Ismingiz:
                            </p>
                            <input
                                value={fio}
                                onChange={(e) => setFio(e.target.value)}
                                type="text"
                                placeholder='Ismingiz'
                            />
                            <p>
                                Telefon raqam:
                            </p>
                            <div className="send_number">
                                <button>+998</button>
                                <input
                                    disabled={!fio}
                                    value={phone_number}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    type="number"
                                />
                            </div>
                            <p>
                                Viloyatingiz
                            </p>
                            <input
                                disabled={!phone_number}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder='Turar joyingiz' />
                        </div>
                        <div className="right_bottom">
                            <p>{t("shop5")}</p>
                            <ul>
                                <li>{t("shop6")}</li>
                                <b>{total} {t("shop9")}</b>
                            </ul>
                            <ul>
                                <li>{t("shop7")}</li>
                                <b>0 {t("shop9")}</b>
                            </ul>
                            <ul>
                                <li>{t("shop8")}</li>
                                <b>{total} {t("shop9")}</b>
                            </ul>
                            <button className='send'
                                disabled={!category}
                                onClick={createDevice, () => { postTest(); }}>
                                {t("shop10")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop_add