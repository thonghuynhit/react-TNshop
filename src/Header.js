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


function Header() {
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
                                            <Link to="all-collections" className="link">All Collections</Link>
                                        </li>
                                        <li>
                                            <Link to="new-arrivals" className="link">New Arrivals</Link>
                                        </li>
                                        <li>
                                            <Link to="collaborations" className="link">Collaborations</Link>
                                        </li>
                                        <li>
                                            <Link to="best-sellers" className="link">Best Sellers</Link>
                                        </li>
                                        <li>
                                            <Link to="accessories" className="link">Accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="gift-card" className="link">Gift Card</Link>
                                        </li>
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
                        <SearchIcon />
                    </li>
                    <li>
                        <Link className="link" to="/login">
                            <PermIdentityTwoToneIcon />
                        </Link>
                    </li>
                    <li className="link">
                        gio hang 9
                    </li>
                    <li className="link">
                        0000$
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header