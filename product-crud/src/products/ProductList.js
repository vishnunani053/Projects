import React, { useState } from 'react'
import Axios from 'axios'

const ProductList = () => {
  let [products, setProducts] = useState([])
  React.useEffect(() => {
    let url = "http://localhost:9000/product/all"
    Axios.get(url).then((response) => {
      setProducts(response.data)
    }).catch((err) => {

    })
  }, [])
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            products.length > 0 ? <>
              {
                products.map((product) => {
                  return <div className='col'>
                    <div className="card">
                      <div className="card-header">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="card-body">
                        <ul className='list-group'>
                          <li className='list-group-item'>{product.name}</li>
                          <li className='list-group-item'>{product.price}</li>
                          <li className='list-group-item'>{product.qty}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                })
              }
            </> : <h1 className=' text-danger'>******No Products*****</h1>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList
