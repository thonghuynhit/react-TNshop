import React from 'react';
import './App.css'
import { Route, Link, Switch } from 'react-router-dom'
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop'

import Kids from './page/Kids'
import Hats from './page/Hats'
import Bottoms from './page/Bottoms'
import Tops from './page/Tops'
import NewArrivals from './page/NewArrivals'
import SingleProduct from './page/SingleProduct'
import Header from './Header'
import Footer from './Footer'
import Home from './page/Home'
import Shop from './page/Shop'


function App() {
  React.useEffect(() => {
    const scrollTop = document.querySelector(".scrollTop")
    window.onscroll = () => {
      if (window.scrollY > 10) {
        scrollTop.classList.add("showScroll")
      } else {
        scrollTop.classList.remove("showScroll")
      }
    }
  }, [window.scrollY])
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  return (
    <div className="app">
      <Header />
      <Route path="/" exact component={ Home } />
      <Route path="/shop" exact component={ Shop } />
      <Route path="/shop/:slug" exact component={ SingleProduct } />
      <Route path="/new-arrivals" exact component={ NewArrivals } />
      <Route path="/tops" exact component={ Tops } />
      <Route path="/bottoms" exact component={ Bottoms } />
      <Route path="/hats" exact component={ Hats } />
      <Route path="/kids" exact component={ Kids } />
      <Footer />
      <div href="#" onClick={ scrollToTop } className="scrollTop">
        <VerticalAlignTopIcon />
      </div>
    </div>
  );
}

export default App;