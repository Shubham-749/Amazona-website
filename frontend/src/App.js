import React from 'react';
// import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';

import { useSelector } from 'react-redux';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  //openMenu and closeMenu were functions in index.html in template folder.
  const openMenu = () => {
    /*to access the sidebar*/
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* amazona heading bar */}
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              {/* <!--javaScript function defined in the bottom of body--> */}
                    &#9776;
                    {/* <!-- ASCII code for Hamburger menu symbol --> */}
            </button>

            <Link to="/" > amazona</Link>

          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }

            {/* <a href="signin.html">Sign In</a> */}
          </div>
        </header>

        {/* <!-- Sidebar --> */}
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>


        {/* <!-- products listing --> */}
        <main className="main">
          <div className="content">

            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />



          </div>
        </main>

        <footer className="footer">
          All rights reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
