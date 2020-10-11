import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './img/logo.svg'
import tops from './img/tops.webp'
import bottoms from './img/bottoms.webp'
import hats from './img/hats.webp'
import collaborations from './img/collaborations.webp'
import kids from './img/kids.webp'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import SearchIcon from '@material-ui/icons/Search'
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useValueContext } from './reducer'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
    const [{products, carts}] = useValueContext()
    const [searchPage, setSearchPage] = React.useState("")
    const [checkout, setCheckout] = React.useState(false)
    React.useEffect(() => {
        const search = document.querySelector(".search")
        const searchText = document.querySelector(".searchText")
        const relustSearch = document.querySelector(".relust-search")
        search.addEventListener("click", () => {
            searchText.classList.add("showInputText")
            search.classList.add("hiddenSearchButton")
            relustSearch.classList.add("show-relust")
            searchText.focus()
        })
        console.log(searchPage)
        searchText.addEventListener("blur", () => {
            searchText.classList.remove("showInputText")
            search.classList.remove("hiddenSearchButton")
            relustSearch.classList.remove("show-relust")
        })
    }, [searchPage])
    const searchEngine = () => {
        let temp = ""
        if (searchPage.length === 0) {
            temp = "Vui long nhap"
        } else if (searchPage.length === 1) {
            let t = products.map(item => item.title)
            for (let i of t) {
                if (i.toLowerCase()[0] === searchPage) {
                    temp += i
                }
            }
        } else {}
        return temp
    }
    const totalPrices = () => {
        if (carts.length === 0) {
            return 0
        } else {
            return carts.reduce((item1, item2) => item1 + (item2.price * item2.quantity), 0)
        }
    }
    const toggleCheckout = () => {
        setCheckout(!checkout)
    }
    React.useEffect(() => {
        const check = document.querySelector(".checkout")
        const app = document.querySelector(".app")
        if (checkout) {
            check.classList.add("checktoggle")
            app.classList.add("apptoggle")
        } else {
            check.classList.remove("checktoggle")
            app.classList.remove("apptoggle")
        }
    }, [checkout])
    console.log(checkout)
    return (
        <div className="header">
            <div className="top">
            $6 Flat Rate & Free Shipping on Orders Over $100
            </div>
            <div className="bottom">
                <nav className="menu">
                    <ul>
                        <li>
                            <Link className="link" to="/new-arrivals">New Arrivals</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link className="link" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} to="/shop">
                                Shop <KeyboardArrowUpIcon style={{ transform: "rotate(180deg)" }} />
                            
                            </Link>
                            <div className="sub-menu">
                                <div className="sub-left">
                                    <h4>shop</h4>
                                    <ul>
                                        <li>
                                            <Link to="/shop" className="link">All Collections</Link>
                                        </li>
                                        <li>
                                            <Link to="new-arrivals" className="link">New Arrivals</Link>
                                        </li>
                                        <li>
                                            <Link to="collaborations" className="link">Collaborations</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="link">Best Sellers</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="accessories" className="link">Accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="gift-card" className="link">Gift Card</Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="sub-right">
                                    <Link to="/tops" className="tops link">
                                        <img src={ tops } />
                                        <h4>tops</h4>
                                    </Link>
                                    <Link to="/bottoms" className="bottoms link">
                                        <img src={ bottoms } />
                                        <h4>bottoms</h4>
                                    </Link>
                                    <Link to="/hats" className="hats link">
                                        <img src={ hats } />
                                        <h4>hats</h4>
                                    </Link>
                                    <Link to="/collaborations" className="collaborations link">
                                        <img src={ collaborations } />
                                        <h4>collabnorations</h4>
                                    </Link>
                                    <Link to="/kids" className="kids link">
                                        <img src={ kids } />
                                        <h4>kids</h4>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="logo">
                    <Link to="/">
                        <img src={ logo } />
                    </Link>
                </div>
                <ul className="functional">
                    <li className="link">
                        <input placeholder="Enter product of name.." className="searchText" type="text" value={ searchPage } onChange={ event => setSearchPage(event.target.value) } />
                        <SearchIcon className="search" />
                        <div className="relust-search">
                            {
                                searchEngine()
                            }
                        </div>
                    </li>
                    <li>
                        <Link className="link" to="/login">
                            <PermIdentityTwoToneIcon />
                        </Link>
                    </li>
                    <li onClick={ toggleCheckout} className="link">
                        {
                            checkout ? <CloseIcon /> : <ShoppingCartIcon />
                        }
                    </li>
                    <li onClick={ toggleCheckout } className="link">
                        { totalPrices() }$
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header