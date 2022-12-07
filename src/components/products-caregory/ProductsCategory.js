 import React from 'react'
 import styles from "./productCategory.module.css"
 import img1 from "../../assets/products1.png"
 import img2 from "../../assets/products2.png"
 import img3 from "../../assets/products3.png"
 import img4 from "../../assets/products4.png"
import { Link } from 'react-router-dom'
 
 const ProductsCategory = () => {
   return (
     <section className={`${styles.products}`} id="mahsulotlar">
        <div className={`container-fluid container-xl`}>
            <div className={styles.products_inner}>
                <h3 className={styles.title}>
                    <span className={`${styles.subtitle}`}>Bizning bir biridan shirin va foydali bo’lgan</span>
                    Mahsulotlarimiz
                </h3>

                <ul className={`row gy-4`}>
                    <li className={`${styles.products_item} col-md-6 col-lg-3`}>
                        <Link to="/maxsulotlar/mevalar">
                            <div className={styles.card}>
                                <img className={styles.img} src={img1} alt="" />
                            </div>
                        </Link>
                    </li>

                    <li className={`${styles.products_item} col-md-6 col-lg-3`}>
                        <Link to="/maxsulotlar/qruq-mevalar">
                            <div className={styles.card}>
                                <img className={styles.img} src={img2} alt="" />
                            </div>
                        </Link>
                    </li>

                    <li className={`${styles.products_item} col-md-6 col-lg-3`}>
                       <Link to="/maxsulotlar/savzavotlar">
                            <div className={styles.card}>
                                <img className={styles.img} src={img3} alt="" />
                            </div>
                       </Link>
                    </li>

                    <li className={`${styles.products_item} col-md-6 col-lg-3`}>
                       <Link to="/maxsulotlar/instruments">
                            <div className={styles.card}>
                                <img className={styles.img} src={img4} alt="" />
                            </div>
                       </Link>
                    </li>
                </ul>
            </div>
        </div>
     </section>
   )
 }
 
 export default ProductsCategory