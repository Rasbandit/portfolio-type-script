import React, { Component } from 'react';
import '../scss/modal.scss'

export default class Modal extends Component {
  state = {
    height: ''
  }

  componentDidMount = () => {
    this.setHeight()
  }

  componentDidUpdate = () => {
    let element = document.querySelector('#modalVideo') || document.querySelector('#modalImage')
    if (window.innerWidth > 1300) {
      if (this.state.height !== element.clientHeight + 20) {
        this.setHeight()
      }
    }
    else if (window.innerWidth <= 1300 && this.state.height !== '') {
      this.setState({ height: '' })
    }
  }

  setHeight = () => {
    let height
    if (window.innerWidth > 1300) {

      if (document.querySelector('#modalVideo')) {
        height = document.querySelector('#modalVideo').clientHeight + 20
      } else {
        height = document.querySelector('#modalImage').clientHeight + 20
      }

    }
    this.setState({
      height
    })
  }



  render() {
    const { project: { title, text, videoLarge, videoMedium, imgMedium, imgLarge, links }, scale, } = this.props
    const { height } = this.state;

    const width = window.innerWidth;
    const video = width > 800 ? videoLarge : videoMedium
    const img = document.getElementById('modalImage');
    let figureHeight = 0;
    if (img) {
      figureHeight = img.height
    }
    return (
      <section id="modal" onClick={e => e.stopPropagation()} style={{ transform: `scale(${scale.scale})`, height }} >
        <figure style={{ height: figureHeight }}>
          {
            videoLarge
              ? <video id="modalVideo" muted src={video} poster={imgMedium} autoPlay loop />
              : (
                <>
                  <img id="modalImage" src={imgMedium} alt={title} />
                  <img id="modalImage" className="lower" src={imgLarge} alt={title} />
                </>
              )
          }
        </figure>
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="links">{
            links.map(item => (
              <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} alt={item.alt} />
                <h4>{item.text}</h4>
              </a>
            ))
          }</div>
        </div>
      </section>
    )
  }
}
