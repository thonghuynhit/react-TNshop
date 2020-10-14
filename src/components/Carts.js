import React from 'react'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { useValueContext } from '../reducer'

function Carts({ cart }) {
    const [{carts}, dispatch] = useValueContext()
    const [quantityCart, setQuantityCart] = React.useState(cart.quantity)
    const previousState = React.useRef(quantityCart)
    const changeQuantityCart = e => {
        if (e.target.value[e.target.value.length - 1] !== " ") {
            if (!isNaN(e.target.value[e.target.value.length - 1])) {
                //setQuantityCart(e.target.value)
                dispatch({
                    type: "Change_quantity_cart",
                    change: changeQuantity(e.target.value)
                })
            } else {
                if (e.target.value === "") {
                    dispatch({
                        type: "Change_quantity_cart",
                        change: changeQuantity(1)
                    })
                } else {
                    alert("Not number")
                }
            }
        }
    }
    console.log(cart.quantity)
    console.log(quantityCart)
    React.useEffect(() => {
        console.log(carts)
    }, [])
    const changeQuantity = (quantity_cart) => {
        let temp = carts
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === cart.id) {
                temp[i] = {
                    id: cart.id,
                    title: cart.title,
                    image: cart.image,
                    price: cart.price,
                    color: cart.color,
                    type: cart.type,
                    link: cart.link,
                    quantity: quantity_cart
                }
            }
        }
        return temp
    }
    if (quantityCart === "") {
        // dispatch({
        //     type: "Change_quantity_cart",
        //     change: changeQuantity()
        // })
    } else {
        if (quantityCart !== cart.quantity) {
            // dispatch({
            //     type: "Change_quantity_cart",
            //     change: changeQuantity()
            // })
        }
    }

    // React.useEffect(() => {
    //     previousState.current = quantityCart
    //     const changeQuantity = () => {
    //         let temp = carts
    //         for (let i = 0; i < temp.length; i++) {
    //             if (temp[i].id === cart.id) {
    //                 temp[i] = {
    //                     id: cart.id,
    //                     title: cart.title,
    //                     image: cart.image,
    //                     price: cart.price,
    //                     color: cart.color,
    //                     type: cart.type,
    //                     link: cart.link,
    //                     quantity: quantityCart
    //                 }
    //             }
    //         }
    //         return temp
    //     }
    //     if (quantityCart === "") {
    //         dispatch({
    //             type: "Change_quantity_cart",
    //             change: changeQuantity()
    //         })
    //     } else {
    //         if (quantityCart !== cart.quantity) {
    //             dispatch({
    //                 type: "Change_quantity_cart",
    //                 change: changeQuantity()
    //             })
    //         }
    //     }
    //     console.log(previousState.current)
    //     console.log(changeQuantity())
    // }, [quantityCart])
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
                    <input type="text" value={ cart.quantity} onChange={ changeQuantityCart } />
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