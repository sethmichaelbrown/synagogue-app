import React from 'react'
import userImage from '../media/images/user-image.png'
import background from '../media/images/react-background.png'

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Shaarey Zedek</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><div className="user-view">
          <div className="background">
          </div>
          <a href="#user"><img className="circle" src={userImage} /></a>
          <a href="#name"><span className="white-text name">
            <h5>Welcome, Seth</h5>
          </span></a>
          <a className="waves-effect waves-light btn sign-out-btn">Sign Out</a>
        </div></li>
        <li><a onClick={props.toAdmin} className='sidenav-close'>Event List</a></li>
        <li><div className="divider"></div></li>
        <li><a onClick={props.toAdmin} className='sidenav-close'>Admin Portal</a></li>
      </ul>
    </div>
  )
}

export default NavBar