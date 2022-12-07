import React from 'react'
import styles from  "./slides.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay,Keyboard} from "swiper";

import img1 from "../../assets/comment-img1.png"
import img2 from "../../assets/comment-img2.png"
import img3 from "../../assets/comment-img3.png"

const Slider = () => {
  return (
    <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            keyboard={{
                enabled:true
            }}
            breakpoints={{
            1: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            778: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            }}
            modules={[Autoplay,Keyboard]}
            className="mySwiper"
        >
            <SwiperSlide>
            <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img className={styles.img} src={img1} alt="Dildora Qayumova" />
                    </div>

                    <strong className={styles.card_name}>Dildora Qayumova</strong>

                    <span className={styles.card_job}>Shifokor</span>

                    <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet consectetur. Pretium orci dictum et bibendum risus aliquet. Consectetur blandit sem in libero scelerisque. Aliquam nec elit laoreet velit sit egestas quis.
                    </p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img className={styles.img} src={img2} alt="Sanjar Karimov" />
                    </div>

                    <strong className={styles.card_name}>Sanjar Karimov</strong>

                    <span className={styles.card_job}>O’qituvchi</span>

                    <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet consectetur. Pretium orci dictum et bibendum risus aliquet. Consectetur blandit sem in libero scelerisque. Aliquam nec elit laoreet velit sit egestas quis.
                    </p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img className={styles.img} src={img3} alt="Dilfuza Nodirova" />
                    </div>

                    <strong className={styles.card_name}>Dilfuza Nodirova</strong>

                    <span className={styles.card_job}>Oshpaz</span>

                    <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet consectetur. Pretium orci dictum et bibendum risus aliquet. Consectetur blandit sem in libero scelerisque. Aliquam nec elit laoreet velit sit egestas quis.
                    </p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img className={styles.img} src={img1} alt="Dildora Qayumova" />
                    </div>

                    <strong className={styles.card_name}>Dildora Qayumova</strong>

                    <span className={styles.card_job}>Shifokor</span>

                    <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet consectetur. Pretium orci dictum et bibendum risus aliquet. Consectetur blandit sem in libero scelerisque. Aliquam nec elit laoreet velit sit egestas quis.
                    </p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img className={styles.img} src={img2} alt="Sanjar Karimov" />
                    </div>

                    <strong className={styles.card_name}>Sanjar Karimov</strong>

                    <span className={styles.card_job}>O’qituvchi</span>

                    <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet consectetur. Pretium orci dictum et bibendum risus aliquet. Consectetur blandit sem in libero scelerisque. Aliquam nec elit laoreet velit sit egestas quis.
                    </p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img className={styles.img} src={img3} alt="Dilfuza Nodirova" />
                    </div>

                    <strong className={styles.card_name}>Dilfuza Nodirova</strong>

                    <span className={styles.card_job}>Oshpaz</span>

                    <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet consectetur. Pretium orci dictum et bibendum risus aliquet. Consectetur blandit sem in libero scelerisque. Aliquam nec elit laoreet velit sit egestas quis.
                    </p>
            </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider