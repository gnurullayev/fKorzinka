import React from 'react'
import styles from "./contact.module.css"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/Facebook.png"
import telegram from "../../assets/telagram.png"

const Contact = () => {
  return (
    <section className={styles.contact} id="bog'lanish">
      <div className={`${styles.contact_container} container-xl px-0 px-lg-3`}>
        <h3 className={styles.title}>Biz bn bog’lanish</h3>

        <div className={styles.contact_inner}>
          <div className={styles.contact_start}>
            <ul className={styles.social_networks}>
              <li className={styles.social_network}>
                <a href="/">
                  <img className={styles.img} src={instagram} alt="Instagram" />
                </a>
              </li>

              <li className={styles.social_network}>
                <a href="/">
                  <img className={styles.img} src={facebook} alt="Facebook" />
                </a>
              </li>

              <li className={styles.social_network}>
                <a href="/">
                  <img className={styles.img} src={telegram} alt="Telegram" />
                </a>
              </li>
            </ul>

            <div className={styles.box}>
              <div className={styles.form_box}>
                <div className={styles.box_inner}>
                  <p className={styles.form_title}>Savollaringizni qoldiring</p>

                  <form className={styles.form}>
                    <input className={styles.form_input} type="text" placeholder='Ismingiz'/>

                    <input className={styles.form_input} type="text" placeholder='Telefon raqamingiz'/>

                    <textarea className={styles.form_messaga} rows="5" placeholder='Izoh qoldiring'></textarea>
                    
                    <button className={styles.btn} type="submit">Bog’lanish</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contact_end}>
            <iframe className={styles.address} title="Urgut tuman" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d197152.149286193!2d67.211632!3d39.457979!3m2!1i1024!2i768!4f13.1!2m1!1sAlgal&#39;!5e0!3m2!1suz!2sus!4v1668849870513!5m2!1suz!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact