import React from 'react'

const Context = React.createContext()
function Reducer({ reducer, initState, children }) {
    const Rd = React.useReducer(reducer, initState)
    return (
        <Context.Provider value={ Rd }>
            { children }
        </Context.Provider>
    )
}
const useValueContext = () => React.useContext(Context)

// const [{products}] = useValueContext()

// const getSlug = (slug) => {
//     let temp = { ...products }
//     let product = temp.find(item => slug === item.link)
//     return product
// }

export { Reducer, useValueContext, Context }