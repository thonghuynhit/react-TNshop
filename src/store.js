import a2 from './components/img/buttonup.webp'
import a1 from './components/img/pinehat.webp'
import a3 from './img/shirt.webp'

const initState = {
    products: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 3, link: "mingo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 172, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 60, link: "mingo-button-up", type: "hats", color: "purple" },
    ],
    new_Arrivals: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "mingo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-button-up", type: "hats", color: "purple" },
    ],
    tops: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "mingo-button-up", type: "button up", color: "pink", soldout: true },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a3, price: 12, link: "mingo-button-up", type: "pants", color: "purple", soldout: true},
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-button-up", type: "hats", color: "purple", soldout: true },
    ],
    bottoms: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "mingo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-button-up", type: "hats", color: "purple" },
    ],
    hats: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "mingo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-button-up", type: "hats", color: "purple" },
    ],
    kids: [
        { title: "Pine Hats", image: a1, price: 5, link: "pine-hats", type: "hats", color: "black" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a1, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "Mingo Button Up", image: a2, price: 84, link: "mingo-button-up", type: "button up", color: "pink" },
        { title: "The Tops", image: a1, price: 60, link: "mingo-button-up", type: "tops", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 20, link: "mingo-button-up", type: "shirt", color: "pink" },
        { title: "Mingo Button Up", image: a2, price: 12, link: "mingo-button-up", type: "pants", color: "purple" },
        { title: "The Bottoms", image: a2, price: 54, link: "mingo-button-up", type: "bottoms", color: "aqua" },
        { title: "Mingo Button Up", image: a1, price: 3, link: "mingo-button-up", type: "hats", color: "purple" },
    ],
}

function reducer(state, action) {
    switch (action.type) {
        case "": break;
        default: return state
    }
}
export { reducer, initState }