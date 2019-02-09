import React, { Component } from 'react'
import splash from '../assets/videos/splash.m4v';
import splashImg from '../assets/work/splash.jpg';

// interface HomeProps {
//   style: {}
// }

export default class Home extends Component {
  render() {
    return (
      <div >
        <div className="splash">
          <video src={splash} poster={splashImg} autoPlay loop></video>
          <div className="overlay">
            <h1>Todd Rasband</h1>
          </div>
        </div >
      </div>
    );
  }
}
