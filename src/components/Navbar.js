import React from 'react'
import {Link,NavLink,withRouter} from "react-router-dom";


 const Navbar = (props) => {
   //console.log(props);
  return (
    <div>
      <nav className='nav nav-wrappper red darken-3'>
        <div className='container'>
          <a className='brand-logo'>Poke's Time</a>
          <ul className="right">
            <li><Link to='/'>Home</Link></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default withRouter(Navbar);
