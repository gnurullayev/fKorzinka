import React from 'react'
import styles from "./productItem.module.css"

const ProductItem = ({from,pollinator,time,size,desc,img,name}) => {
  return (
    <li className={styles.item}>
      <div className={styles.card_img}>
        <img className={styles.img} src={img} alt={name} />
      </div>

      <div className={styles.card_content}>
        <h3 className={styles.card_title}>{name}</h3>

        {
          desc === undefined
          ?
          <ul className={styles.card_list}>
            {
              (from === null || from === undefined ) 
              ? <span className={styles.desc}>Bizda hozircha bu maxsulotimiz haqida ma'lumot bera olmaymiz</span>
              :<li className={styles.card_item}><span>Vatani</span> - <strong>{from}</strong></li>
          
            }

            {
                (pollinator === null || pollinator === undefined ) 
                ? null
                :<li className={styles.card_item}><span>Changlatuvchisi</span> - <strong>{pollinator}</strong></li>
            }

            {
              (time === null || time === undefined ) 
              ? null
              :<li className={styles.card_item}><span>Hosil yig’ish vaqt</span> - <strong>{time}</strong></li>
            }

            {
              (size === null || size === undefined ) 
              ? null
              :<li className={styles.card_item}><span>Mevasi Kattalig</span> - <strong>{size}</strong></li>
            }  
          </ul>
          : 
          <p className={styles.desc}>{desc}</p>
        }
      </div>
    </li>
  )
}

export default ProductItem