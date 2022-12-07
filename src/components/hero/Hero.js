import React from 'react'
import styles from "./hero.module.css"
import heroImg from "../../assets/hero-img.png"

const Hero = () => {
  return (
   <section className={styles.hero}>
      <div className={`container-fluid container-xl text-center text-md-start`}>
        <div className={`${styles.hero_inner} row align-items-center`}>
          <div className="col-md-6">
            <div className={`${styles.hero_content}`}>
              <h1 className={styles.title}>Fkorzinka</h1>
              <h2 className={styles.hero_title}>Lorem ipsum dolor sit amet consectetur.</h2>

              <p className={styles.hero_desc}>
                Lorem ipsum dolor sit amet consectetur. Ut eu tempor vel sagittis tincidunt. Nam ridiculus ipsum sapien neque sit id non faucibus facilisis. Morbi lacus risus nibh amet nibh faucibus habitant.
              </p>

              <a href="#bog'lanish" type='text' className={styles.hero_btn}>Bog’lanish</a>

            </div>
          </div>

          <div className="col-md-6">
            <div className={`${styles.hero_img}`}>
              <img className={`${styles.img} figure-img img-fluid`} src={heroImg} alt="Hero img" />
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Hero