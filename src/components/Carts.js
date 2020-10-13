import React from 'react'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Carts({ cart }) {
    return (
        <Link className="carts" to={ "/shop/" + cart.link }>
            <div className="image">
                <img src={ cart.image } />
            </div>
            <div className="infomation">
                <h3>{ cart.title }</h3>
                <h4>${ cart.price.toFixed(2) } <span style={{ color: cart.color }}> { cart.color }</span></h4>
                <div className="quantity">
                    <button>+</button>
                    <input type="text" value={ cart.quantity } />
                    <button>-</button>
                    <button>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </div>
        </Link>
    )
}
export default Carts