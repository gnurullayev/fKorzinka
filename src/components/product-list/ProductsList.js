import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/data'
import ProductItem from '../product-item/ProductItem'
import styles from "./productsList.module.css"

const ProductsList = () => {

  const {id} = useParams()

  if(data[id] === undefined) return <p className='text'>Biz hozirda bunday maxsulotlarni yatishtirmayabmiz</p>
  return (
    <ul className={styles.products_list}>
        {
          data[id].map(product => (
            <ProductItem key={product.id} {...product}/>
          ))
        }

    </ul>
  )
}

export default ProductsList