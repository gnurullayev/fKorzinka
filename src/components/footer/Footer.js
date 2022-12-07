import React from 'react'
import styles from "./footer.module.css"

import img1 from "../../assets/footer-img4.svg"
import img2 from "../../assets/footer-img5.svg"
import img3 from "../../assets/footer-img6.svg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`container-fluid container-xl`}>
          <ul className={styles.footer_list}>
            <li className={styles.footer_item}>
              <strong className={styles.item_title}>Biz haqimizda</strong>

              <p className={styles.desc}>
                «Fruktovaya korzinka» MCHJ ga qarashli bo’lgan 3 ta bog’ mavjud bo’lib shundan Znak bog’: 350 ga, Ittifoq bog’: 110 ga, Urgut bog’ 108 ga. Umumiy maydoni 568 ga. Bu yerga barcha turdagi meva va sabzavotlar yetishtiriladi.
              </p>
            </li>

            <li className={styles.footer_item}>
              <strong className={styles.item_title}>Menular</strong>

              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link className={styles.link} to="/">Bosh sahifa</Link>
                </li>

                <li className={styles.item}>
                  <a className={styles.link} href="#biz-haqimizda">Biz haqimizda</a>
                </li>

                <li className={styles.item}>
                  <a className={styles.link} href="#mahsulotlar">Mahsulotlar</a>
                </li>

                <li className={styles.item}>
                  <a className={styles.link} href="#izohlar">Izohlar</a>
                </li>

                 <li className={styles.item}>
                  <a className={styles.link} href="#bog'lanish">Bog’lanish</a>
                </li>
              </ul>
            </li>

            <li className={styles.footer_item}>
              <strong className={styles.item_title}>Menular</strong>

              <ul className={styles.connect_list}>
                <li className={styles.connect_item}>
                  Samarqand, Urgut tumani, Algar mahallas
                </li>

                <li className={styles.connect_item}>
                  info@fkorzinka.uz
                </li>

                <li className={styles.connect_item}>
                  <span className={styles.connect_item_span}>+998 98 137 01 60</span>
                  <span className={styles.connect_item_span}>+998 98 137 01 35</span>
                  <span className={styles.connect_item_span}>+998 98 130 20 16</span>
                </li>
              </ul>
            </li>

            <li className={styles.footer_item}>
              <strong className={styles.item_title}>Ijtimoiy tarmoqlar</strong>

              <ul className={styles.social_networks}>
                <li className={styles.social_network}>
                  <a href="https://www.instagram.com/f_korzinka/?igshid=YmMyMTA2M2Y%3D">
                    <img className={styles.img} src={img1} alt="Instagram" />
                  </a>
                </li>

                <li className={styles.social_network}>
                  <a href="https://www.facebook.com/profile.php?id=100087873777410&mibextid=ZbWKwL">
                    <img className={styles.img} src={img2} alt="Facebook" />
                  </a>
                </li>

                <li className={styles.social_network}>
                  <a href="/">
                    <img className={styles.img} src={img3} alt="Telegram" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer