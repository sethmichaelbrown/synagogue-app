import React from 'react'
import star from '../media/images/star-of-david.png'
import background from '../media/images/react-background.png'

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <h5>Shaarey Zedek</h5>
          </a>
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
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  )
}

export default NavBar