import React from 'react'
import Brends from '../brends/Brends'
import Coments from '../comments/Comments'
import Intro from '../intro/Intro'
import ProductsCategory from '../products-caregory/ProductsCategory'

const Main = () => {
  return (
    <main className='main'>
      <Intro/>
      <ProductsCategory/>
      <Coments/>
      <Brends/>
    </main>
  )
}

export default Main