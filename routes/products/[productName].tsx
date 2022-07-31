/** @jsx h */
import {h} from 'preact'
import {PageProps} from '$fresh/server.ts'
import SayJokes from '../../islands/SayJokes.tsx'

function ProductPage(props: PageProps) {
  const {productName: product} = props.params;  
  return (
    <div>
      <h1>Product {product}</h1>
      <SayJokes/>
    </div>
  )
}

export default ProductPage
