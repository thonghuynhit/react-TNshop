import React from 'react'
import { useValueContext } from '../reducer'
import Kids from './Kids'
import './SingleProduct.css'

function SingleProduct(props) {
    const [{ products, new_Arrivals, kids, tops, bottoms, hats, collaborations, }] = useValueContext()
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
    console.log(tops.find(item => item.link === props.match.params.slug))
    console.log(props.match.params.slug)
    console.log(dataSingle())
    console.log(lastLink)
    return (
        <div className="single-product">
            <div>
                <img src={ dataSingle().image } />
            </div>
            <div>
                <h2>{ dataSingle().title }</h2>
                <h4>{ dataSingle().price }$</h4>
                <div className="colors">Color: <span>{ dataSingle().color }</span></div>
                <div className="types">Type: <span>{ dataSingle().type }</span></div>
                <div className="quantity">Quantity
                    <div>
                        <button> + </button>
                        <span>1</span>
                        <button> - </button>
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
    )
}
export default SingleProduct