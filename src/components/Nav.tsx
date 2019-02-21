import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
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
          <Link to="/"><h2>Todd Rasband</h2></Link>
          <nav className="desktop">
            <NavLink to="/about" activeClassName="active" exact>About</NavLink>
            <NavLink to="/webdev" activeClassName="active">WebDev</NavLink>
            <NavLink to="/adobe" activeClassName="active">Adobe</NavLink>
            <NavLink to="/teaching" activeClassName="active">Teaching</NavLink>
          </nav>
          <nav className="mobile" onClick={() => this.props.toggleNav(undefined)} >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </nav>
        </div>
        <div className={(this.props.showNav ? 'slidein-show' : '') + ' slidein'}>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/about" activeClassName="active" exact>About</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/webdev" activeClassName="active">WebDev</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/adobe" activeClassName="active">Adobe</NavLink>
          <NavLink onClick={() => this.props.toggleNav(false)} to="/teaching" activeClassName="active">Education</NavLink>
        </div>
      </>
    )
  }
}
