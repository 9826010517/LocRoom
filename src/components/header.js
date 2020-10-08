import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Home from './home' ;
import Register from './register';
import Login from './login';
import $ from 'jquery';
import './globle.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 50) {
                $(".navigation_body").addClass("activeheader");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".navigation_body").removeClass("activeheader");
            }
        });
    });
}
   render() {
      return (

     < BrowserRouter >
     <div className="navigation_body">
     <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          <img src="assets/img/logo/locroom1.png" className="img-fluid logoimg"></img>
          {/* Logo */}
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
            <Link to="/register" className="nav-link">Rgister</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
         </div>
         <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
      </ BrowserRouter >
        
      );
   }
}
export default Header;
