import React, { Component } from 'react'
import portrait from '../assets/profile/portrait.jpg';

import { webDev, spaceCenter, general } from './AboutStories'

import '../scss/About.scss'

interface AboutState {
  story: string
}

export default class About extends Component<any, AboutState> {
  state = {
    story: 'general'
  }

  setText(story: string) {
    this.setState({
      story
    })
    const element = document.getElementById('about-text')
    // console.log(element)
    if (element) {
      element.scrollTo({
        top: 0, // could be negative value
        left: 0,
        behavior: 'smooth'
      });
      // element.scrollTo(0, 0)
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
              {/* <h2>My Story</h2> */}
              <ul>
                <li className={story === 'general' ? 'selected' : ''} onClick={() => this.setText('general')}>General</li>
                <li className={story === 'web' ? 'selected' : ''} onClick={() => this.setText('web')} > Web Dev</li>
                <li className={story === 'space' ? 'selected' : ''} onClick={() => this.setText('space')} > Space Center</li>
              </ul>
              <section id="about-text">
                {story === 'general' ? general : ''}
                {story === 'space' ? spaceCenter : ''}
                {story === 'web' ? webDev : ''}
              </section>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
