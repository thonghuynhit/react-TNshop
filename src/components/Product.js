import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product({title, image, price, link}) {
    return (
        <Link to={`/shop/${link}`} className="product">
            <div>
                <img src={ image } alt={ title } />
            </div>
            <p>{ title }</p>
            <h4>{ price }$</h4>
        </Link>
    )
}
export default Product