import React from 'react'

import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,Pagination } from 'swiper'
import styles from "./brends.module.css"

import img1 from "../../assets/brend1.png"
import img2 from "../../assets/brend2.png"
import img3 from "../../assets/brend3.png"
import img4 from "../../assets/brend4.png"

const Brends = () => {
  return (
    <section className={styles.brends}>
      <div className={`container-fluid container-xl`}>
        <div className={styles.brends_inner}>
          <h3 className={styles.title}>Bizning Bendlar</h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={60}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1: {
                  slidesPerView: 1,
                  spaceBetween: 20,
              },
              485: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              700: {
                  slidesPerView: 3,
                  spaceBetween: 20,
              },
              992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
              },
              }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.card}>
              <img className={styles.card_img} src={img1} alt=""  style={{width: "108px",height:"161px"}}/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
                <img className={styles.card_img} src={img2} alt=""  style={{width: "144px",height:"163px"}}/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
              <img className={styles.card_img} src={img3} alt=""  style={{width: "167px",height:"172px"}}/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
              <img className={styles.card_img} src={img4} alt=""  style={{width: "191px",height:"118px"}}/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
              <img className={styles.card_img} src={img1} alt=""  style={{width: "108px",height:"161px"}}/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
              <img className={styles.card_img} src={img2} alt=""  style={{width: "108px",height:"161px"}}/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
              <img className={styles.card_img} src={img3} alt=""  style={{width: "108px",height:"161px"}}/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Brends