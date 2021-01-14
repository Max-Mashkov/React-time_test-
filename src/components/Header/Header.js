import React, { Component } from 'react';

//styles
import style from './Header.module.scss';
import logo from './img/logo.png';
import phone_square from './img/phone_square.png';
import down_arrow from './img/down_arrow.png';

//parts
import { Entry } from '../Entry';

export class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <figure className={style.logo}>
                    <img className={style.logo__icon} src={logo} alt="Логотип" />
                    <figcaption className={style.logo__text}>Единый <br />Центр Записи</figcaption>
                </figure>

                <div className={style.header__container}>
                    <div className={style.tel_number_container}>
                        <figure className={style.tel_number}>
                            <img src={phone_square} alt="Icon" />
                                <figcaption className={style.tel_number__text}>80300 5000</figcaption>
                        </figure>
        {/*------------------------------------------ПОДКЛЮЧЕНИЕ КНОПКИ--------------------------------------------------------------------------------------------*/}
                        <Entry />

                    </div>
                    <nav className={style.menu}>
                        <ul className={style.menu__row}>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> Главная</a></li>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> Услуги <img
                                className={style.menu__icon} src={down_arrow} alt="Arrow_down" /></a></li>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> Клиники и кабинеты</a></li>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> О нас</a></li>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> Статьи</a></li>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> FAQ</a></li>
                            <li className={style.menu__item}><a className={style.menu__link} href="#"> Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
