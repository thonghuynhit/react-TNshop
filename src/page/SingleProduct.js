import React from 'react'
import { useValueContext } from '../reducer'
import Kids from './Kids'
import './SingleProduct.css'
import { Link } from 'react-router-dom'

function SingleProduct(props) {
    const [{ products, new_Arrivals, kids, tops, bottoms, hats, collaborations, }] = useValueContext()
    const [quantity, setQuantity] = React.useState(1)
    const whatLink = props.match.params.slug.split("-")
    let lastLink = whatLink[whatLink.length - 1]
    const dataSingle = () => {
        switch(lastLink) {
            case "tops": return tops.find(item => (item.link + "-tops") === props.match.params.slug)
                break
            case "bottoms": return bottoms.find(item => (item.link + "-bottoms") === props.match.params.slug)
                break
            case "kids": return kids.find(item => (item.link + "-kids") === props.match.params.slug)
                break
            case "hats": return hats.find(item => (item.link + "-hats") === props.match.params.slug)
                break
            case "collaborations": return collaborations.find(item => (item.link + "-collaborations") === props.match.params.slug)
                break
            case "arrivals": return new_Arrivals.find(item => (item.link + "-new-arrivals") === props.match.params.slug)
                break
            default: return products.find(item => (item.link + "-shop") === props.match.params.slug)
        }
    }
    const directionLink = () => {
        if (lastLink === "arrivals") {
            return "new-arrivals"
        } else {
            return lastLink
        }
    }
    const incream = () => {
        setQuantity(() => quantity + 1)
    }
    const decream = () => {
        if (quantity !== 1) {
            setQuantity(() => quantity - 1)
        }
    }
    const valueQuantity = e => {
        if (!isNaN(e.target.value)) {
            if (e.target.value !== " ") {
                setQuantity(parseInt(e.target.value))
            }
        }
    }
    React.useEffect(() => {
        if (isNaN(quantity)) {
            setQuantity(1)
        }
    }, [quantity])

    console.log(typeof quantity)
    console.log(lastLink)
    return (
        <div className="single-product">
            <div className="shops__top">
                <h6>
                    <Link className="link--shop" to="/"> Home </Link>
                     » <Link className="link--shop" to={`/${directionLink()}`}> { directionLink() } </Link>
                     » <span> { dataSingle().title } </span>
                </h6>
                <img src={ "" } />
                <h1 style={{ border: "none" }}>{ "" }</h1>
            </div>
            <div className="wrap-content">
                <div>
                    <img src={ dataSingle().image } />
                </div>
                <div>
                    <h1>{ dataSingle().title }</h1>
                    <h4>${ dataSingle().price.toFixed(2) }</h4>
                    <div className="colors">Color: <span>{ dataSingle().color }</span></div>
                    <div className="types">Type: <span>{ dataSingle().type }</span></div>
                    <div className="quantity">Quantity: 
                        <div> 
                            <button onClick={ incream }> + </button>
                            <input type="text" value={ quantity } onChange={ valueQuantity } />
                            <button onClick={ decream }> - </button>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <button>Add to Cart</button>
                    </div>
                    <div className="buy-it-now">
                        <button>Buy it Now</button>
                    </div>
                    <div className="social"></div>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct