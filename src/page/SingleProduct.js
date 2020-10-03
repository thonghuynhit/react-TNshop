import React from 'react'
import { useValueContext } from '../reducer'

function SingleProduct(props) {
    const [{ products }] = useValueContext()
    const SinglePd = products.find(item => item.link === props.match.params.slug)
    console.log(SinglePd)
    return (
        <div>Single Product</div>
    )
}
export default SingleProduct