import React, { Component } from 'react'
import portrait from '../assets/profile/portrait.jpg';

import { webDev, adobe, general } from './AboutStories'

import '../scss/About.scss'

interface AboutState {
  story: string
}

export default class About extends Component<{}, AboutState> {
  public state = {
    story: 'general'
  }

  private setText(story: string) {
    this.setState({
      story
    })
    const element: HTMLElement | null = document.getElementById('about-text')
    if (element) {
      element.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

  render() {
    const { story } = this.state
    return (
      <div id="About">
        <main>
          <div className="container">
            <figure>
              <img src={portrait} alt="" />
            </figure>
            <div>
              <ul>
                <li className={story === 'general' ? 'selected' : ''} onClick={() => this.setText('general')}>General</li>
                <li className={story === 'web' ? 'selected' : ''} onClick={() => this.setText('web')} >Web Dev</li>
                <li className={story === 'adobe' ? 'selected' : ''} onClick={() => this.setText('adobe')} >Adobe</li>
              </ul>
              <section id="about-text">
                {story === 'general' ? general : ''}
                {story === 'web' ? webDev : ''}
                {story === 'adobe' ? adobe : ''}
              </section>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
