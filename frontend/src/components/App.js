import React, { Component } from 'react';
import {Route,Link,BrowserRouter} from "react-router-dom";
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Logo from '../images/logo2.png';
import '../css/styles.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter >    
       
        <div >

          <div className="app">
            <div className="logo">
              <img src={Logo} width="240px" alt="" height="60px"/>
            </div>
            <div className="link">
              <Link  className="to" to='/'  >About us</Link>
              <Link className="to" to='menu'>Menu</Link>
              <Link  className="to" to='/contact'>Contact</Link>
             </div>
          </div>
          
          <div >
             <Route exact path = '/' component={About}/>
             <Route exact path = '/menu' component={Menu}/>
             <Route exact path = '/contact' component={Contact}/>
          </div>

        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
 