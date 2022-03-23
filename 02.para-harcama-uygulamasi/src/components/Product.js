import React from 'react'

function Product({ product }) {
  return (
    <>
        <div className='product'>
            <h6>{product.title}</h6>
            <div className='price'>$ {product.price}</div>
            <div className='actions'>
                <button>Sat</button>
                <span className='amount'>0</span>
                <button>Satın Al</button>
            </div>
            <style jsx>
                {`.product{
                    padding: 10px;
                    background: #fff;
                    border: solid 1px #ddd;
                    margin-bottom: 20px;
                }`}
            </style>
        </div>
    </>
  )
}

export default Product
