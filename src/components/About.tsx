import React, { Component } from 'react'
import portrait from '../assets/profile/portrait.jpg';
import gitHubSmall from '../assets/icons/git-hub-small.svg';
import portfolioSmall from '../assets/icons/portfolio-icon.svg';
import linkedin from '../assets/icons/linked-in.svg';

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
              {/* <ul>
                <li className={story === 'general' ? 'selected' : ''} onClick={() => this.setText('general')}>General</li>
                <li className={story === 'web' ? 'selected' : ''} onClick={() => this.setText('web')} >Web Dev</li>
                <li className={story === 'adobe' ? 'selected' : ''} onClick={() => this.setText('adobe')} >Adobe</li>
              </ul> */}
              <section id="about-text">
                {general}
                {/* {story === 'general' ? general : ''}
                {story === 'web' ? webDev : ''}
                {story === 'adobe' ? adobe : ''} */}
              </section>
              <footer>
                <a href="https://github.com/rasbandit" target="_blank" rel="noopener noreferrer">
                  <img src={gitHubSmall} alt="" />
                  <h3>GitHub</h3>
                </a>
                <a href="https://drive.google.com/drive/folders/0B2kjzXYkWALKfktWMTJCNGNGaS1fenRBQ3NZZHZ6aWN0SnVuc0J6clBZRlBSZGdNMEJtaHM?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <img src={portfolioSmall} alt="" />
                  <h3>Full Portfolio</h3>
                </a>
                <a href="https://www.linkedin.com/in/toddrasband/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="" />
                  <h3>linkedin</h3>
                </a>
              </footer>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
