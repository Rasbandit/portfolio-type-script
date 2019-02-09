import React, { Component } from 'react';
import search from '../assets/icons/search.svg'

export default class WebDevProject extends Component {
  state = {
    hover: false
  }

  render() {
    let { imgMedium, title, style, x, y, width, selectProject } = this.props
    const { hover } = this.state
    let newStyle = { ...style }
    if (newStyle.transform) {
      if (newStyle.transform.includes('translate3d')) {

      } else {
        newStyle.transform = `${newStyle.transform} translate3d(${x}px, ${y}px, 0)`
      }
    }
    else {
      newStyle.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    return (
      <div style={{ ...newStyle, width, height: width / 1.773 }} className="web-project" onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })} onClick={() => selectProject(title)}>
        <div className={hover ? 'thumb-overlay hover' : 'thumb-overlay'} >
          <img src={search} alt="" />
          <div className="thumb-blue"></div>
        </div>
        <figure>
          <img src={imgMedium} alt={title} />
        </figure>
      </div>
    )
  }
}