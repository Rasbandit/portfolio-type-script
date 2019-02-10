import React, { Component } from 'react'
import portrait from '../assets/profile/portrait.jpg'

import '../scss/About.scss'

export default class About extends Component {
  render() {
    return (
      <div id="About">
        <main>
          <figure>
            <img src={portrait} alt="" />
          </figure>
          <div>
            {/* <h2>My Story</h2> */}
            <section>
              <p>
                I went to school at DevMountain in Provo for Web development and focused on learning AngularJS, NodeJS and PostgreSQL. I was hired on as a mentor at DevMountain in March of 2017 where I taught the students a variety of web development topics and would lead reviews on any topic the students needed on a weekly basis. While mentoring I learned how to use ReactJS and a variety of smaller libraries.
                  </p>
              <p>
                In August of 2017 I moved to Phoenix Arizona for 3 months to help DevMountain open their new location and provide experience and expertise to our newly hired lead instructor. This was a valuable experience for me as it helped improve a variety soft and leadership skills not directly related to coding.
                  </p>
              <p>
                I spent most of my teens and early 20's working and volunteering at a program called the Christa McAauliffe Education Center where we would teach elementary to middle school students about space and social studies through simulated experiences. I volunteered around 1,000 hours in my early teens before I was hired on as a camp director where I would run the simulations and manage 2-5 other staff members. While there I learned a lot of the basics of programing and debugging, graphic design, motion graphics, leadership, management, and curriculum development.
                </p>
            </section>
          </div>
        </main>
      </div>
    )
  }
}
