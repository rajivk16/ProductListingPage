import React from 'react'
import Header from 'components/Header'
import ProductList from 'components/ProductList'
import Filter from 'components/Filter'

function Home() {
  return (
    <div>
      <Header/>
      <Filter/>
      <ProductList/>
      
    </div>
  )
}

export default Home