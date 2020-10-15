import React from 'react';
import { Route, Link, BrowserRouter, Switch ,withRouter} from 'react-router-dom';
import Home from './home' ;
import Register from './register';
import Login from './login';
import {Loggedheader} from './loggedheader';
import Header from './header'
import Footer from './footer';
// import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import './globle.css';

class Navigation extends React.Component {

state = { message: true }
callbackFunction = (childData) => {
      this.setState({message: childData})
}

// /////////////////////////
   render() {
      { window.location.pathname == "/conversations" ? this.state.message = false : this.state.message = true }
            $(function() {
                        $(window).on("scroll", function() {
                           if($(window).scrollTop() > 50) {
                                 $(".navigation_body").addClass("activeheader");
                           } 
                           else {
                                 $(".navigation_body").removeClass("activeheader");
                        }
                  });
               });

    const { hideHeader } = this.state.message;

    console.log('unit testing', this.state.message)
      return (
     < BrowserRouter >
     {/* <Header parentCallback = {this.callbackFunction} /> */}
    

      { this.state.message ? ( <Header parentCallback = {this.callbackFunction} /> ) : ( null ) }
         <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/conversations" component={Loggedheader}  />
         </Switch>
       { this.state.message ? ( <Footer /> ) : ( null )  }
       {/* <Footer />  */}
      </ BrowserRouter >
      );
   }
}


export default Navigation;
