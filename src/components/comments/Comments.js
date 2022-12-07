import React from 'react';
import Slider from '../slider/Slider';
import styles from "./comments.module.css"

const Coments = () => {
  return (
    <section className={styles.comments} id="izohlar">
      <div className="container-fluid container-xl">
        <div className={`${styles.comments_inner} `}>
          <div className="row gx-4">
            <div className="col-lg-4">
              <div className={styles.comments_content}>
                <h3 className={styles.title}>Sifatli mahsulotdan, Mamnun mijozlar!</h3>

                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur. Gravida sit vitae accumsan vestibulum vitae proin at libero. Libero integer pulvinar aliquam dolor in.  
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <Slider/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coments