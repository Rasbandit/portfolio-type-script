import React, { Component } from 'react';
import { Project } from '../types'
import '../scss/modal.scss'

interface ModalState {
  height: number
}

interface ModalProps {
  project: Project
  scale: { scale: number }
}

export default class Modal extends Component<ModalProps, ModalState> {
  state = {
    height: 0
  }

  componentDidMount = () => {
    this.setHeight()
  }

  componentDidUpdate = () => {
    let element = document.querySelector('#modalVideo') || document.querySelector('#modalImage') || { clientHeight: 0 };
    if (window.innerWidth > 1300) {
      if (this.state.height !== element.clientHeight + 20) {
        this.setHeight()
      }
    }
    else if (window.innerWidth <= 1300 && this.state.height !== 0) {
      this.setHeight()
    }
  }

  setHeight = () => {
    let height: number = 0
    if (window.innerWidth > 1300) {
      const node = document.querySelector('#modalVideo') || document.querySelector('#modalImage')
      if (node) {
        height = node.clientHeight + 20
      }
    }
    this.setState({
      height
    })
  }



  render() {
    const { project: { title, text, videoLarge, videoMedium, imgMedium, imgLarge, links }, scale } = this.props
    const { height } = this.state;

    const width: number = window.innerWidth;
    const videoUrl: string | undefined = width > 800 ? videoLarge : videoMedium
    const img: HTMLElement | null = document.getElementById('modalImage') || document.getElementById('modalVideo');
    let figureHeight: number = 0;
    if (img) {
      figureHeight = img.clientHeight
    }
    return (
      <section id="modal" onClick={e => e.stopPropagation()} style={{ transform: `scale(${scale.scale})`, height: height ? height : '90%' }} >
        <figure style={{ height: figureHeight }}>
          {
            videoLarge
              ? <video id="modalVideo" muted src={videoUrl} poster={imgMedium} autoPlay loop />
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
                {
                  window.innerWidth > 450
                    ? <h4>{item.text}</h4>
                    : ''

                }
              </a>
            ))
          }</div>
        </div>
      </section>
    )
  }
}
