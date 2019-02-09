import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "../scss/nav.scss"

interface NavProps {
  toggleNav: ((showNav: boolean | undefined) => void),
  showNav: boolean
}

export default class Nav extends Component<NavProps> {
  render() {
    const width = window.innerWidth;
    return (
      <>
        <div className='nav' >
          <h2>{width > 400 ? 'Todd Rasband' : 'Todd'}</h2>
          <nav className="desktop">
            <NavLink to="/" activeClassName="active" exact>Splash</NavLink>
            <NavLink to="/about" activeClassName="active" exact>About</NavLink>
            <NavLink to="/webdev" activeClassName="active">WebDev</NavLink>
            <NavLink to="/adobe" activeClassName="active">Adobe</NavLink>
            <NavLink to="/education" activeClassName="active">Education</NavLink>
          </nav>
          <nav className="mobile" onClick={() => this.props.toggleNav()} >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </nav>
        </div>
        <div className={(this.props.showNav ? 'slidein-show' : '') + ' slidein'}>
          <NavLink to="/" activeClassName="active" exact onClick={() => this.props.toggleNav(false)}>Splash</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/about" activeClassName="active" exact>About</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/webdev" activeClassName="active">WebDev</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/adobe" activeClassName="active">Adobe</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/education" activeClassName="active">Education</NavLink>
        </div>
      </>
    )
  }
}
