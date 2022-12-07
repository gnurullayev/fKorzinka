import React from 'react'
import styles from "./intro.module.css"
import introImg from "../../assets/intro-img.png"
import cardImg1 from "../../assets/intro-card-img1.png"
import cardImg2 from "../../assets/intro-card-img2.png"
import cardImg3 from "../../assets/intro-card-img3.png"

const Intro = () => {
  return (
    <section className={styles.intro} id="biz-haqimizda">
      <div className={` container-xl container-fluid`}>
        <div className={`${styles.intro_inner} text-center text-md-start`}>
          <div className={`${styles.inner_top} row align-items-center`}>
            <div className="col-md-6">
              <div className={`${styles.intro_content}`}>
                <h3 className={styles.intro_title}>Lorem ipsum dolor sit amet consectetur.</h3>

                <p className={styles.intro_desc}>
                  «Fruktovaya korzinka» MCHJ ga qarashli bo’lgan 3 ta bog’ mavjud bo’lib shundan Znak bog’: 350 ga, Ittifoq bog’: 110 ga, Urgut bog’ 108 ga. Umumiy maydoni 568 ga. Bu yerga barcha turdagi meva va sabzavotlar yetishtiriladi.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className={`${styles.intro_img} ms-md-auto mx-auto`}>
                <img className={`${styles.img} figure-img img-fluid`} src={introImg} alt="Intro img" />
              </div>
            </div>
          </div>

          <div className={`row align-items-start gy-4`}>
            <div className={`col-md-6 col-lg-4`}>
              <div className={`${styles.intro_card}`}>
                <div className={styles.card_img}>
                  <img className={styles.img} src={cardImg1} alt="Card img"  />
                </div>

                <h4 className={styles.card_title}>SIFATLI</h4>

                <p className={styles.card_desc}>
                  Har bir koʻ chatning oʻ z payvand taglari boʻ ladi va ular kasalikga chidamli tez hosildorlik, koʻ zlangan o’ lchovdagi hosilni berishga muhim roʻ l oʻ ynaydi.Bizda faqat Turkiya labaratoriyadasida yetishtirilgan ishonchlik koʻ chatlar yetishtiramiz.
                </p>
              </div>
            </div>

            <div className={`col-md-6 col-lg-4`}>
              <div className={`${styles.intro_card}`}>
                <div className={styles.card_img}>
                  <img className={styles.img} src={cardImg2} alt="Card img"  />
                </div>

                <h4 className={styles.card_title}>ISHONCHLI</h4>

                <p className={styles.card_desc}>
                  Samarqand viloyati Urgut tumanida 568 gektor bogʻ maydonlari tashkil qilganmiz. Bizning manzilimiz oʻzgarmaydi va yozma ravishda kafolat beramiz.
                </p>
              </div>
            </div>

            <div className={`col-md-6 col-lg-4`}>
              <div className={`${styles.intro_card}`}>
                <div className={styles.card_img}>
                  <img className={styles.img} src={cardImg3} alt="Card img"  />
                </div>

                <h4 className={styles.card_title}>O'ZIGA XOS</h4>

                <p className={styles.card_desc}>
                  Biz yetishtiradigan koʻ chatlar mutloqo Oʻ zbekiston iqlimiga moslashgan va toʻ gri keladigan navlarni yetishtiramiz . Bizning 5 yillik tajribamizda qanday navlar sovuqqa va kasalliklarga chidamliligi to’grisida malakamizga tayangan holda sizga ham tavsiya etamiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro