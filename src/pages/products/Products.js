import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductsList from '../../components/product-list/ProductsList'
import styles from "./products.module.css"

const Products = () => {

  const {id} = useParams()

  return (
    <section className={styles.products}>
      <div className={`container-fluid container-xl`}>
        <div className={styles.products_inner}>
          <ul className={`breadcrumb`}>
            <li className={`breadcrumb-item`}>
              <Link to="/">Mahsulotlar</Link>
            </li>

            <li className={`breadcrumb-item active`} aria-current="page">
              {id}
            </li>
          </ul>

          <ProductsList/>
        </div>
      </div>
    </section>
  )
}

export default Products