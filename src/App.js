import React from 'react';
import './App.css'
import { Route, Link, Switch } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './page/Home'




function App() {
  return (
    <div className="app">
      <Header />
      <Route path="/" exact component={ Home } />
      <Footer />
    </div>
  );
}

export default App;
