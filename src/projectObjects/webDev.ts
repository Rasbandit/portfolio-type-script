//Icons
import graphQL from '../assets/work/webDev/icons/GraphQL.svg'
import redux from '../assets/work/webDev/icons/redux.svg'
import javascript from '../assets/work/webDev/icons/javascript.svg';
import react from '../assets/work/webDev/icons/react.svg';
import angular from '../assets/work/webDev/icons/AngularJS.svg';
import node from '../assets/work/webDev/icons/nodejs.svg';
import postgres from '../assets/work/webDev/icons/postgresql.svg';
import sass from '../assets/work/webDev/icons/sass.svg';
import jest from '../assets/work/webDev/icons/jest.svg';
import github from '../assets/work/webDev/icons/github.svg';
import socket from '../assets/work/webDev/icons/socket-io.svg';
import html from '../assets/work/webDev/icons/html.svg';
import css from '../assets/work/webDev/icons/css3.svg';
import express from '../assets/work/webDev/icons/express.svg';

//link Icons
import internetSmall from '../assets/icons/internet-small.svg';
import gitHubSmall from '../assets/icons/git-hub-small.svg';

//Thumbnails
import asteroidThumb from '../assets/work/webDev/asteroids-medium.jpg'
import houserMedium from '../assets/work/webDev/houser-medium.jpg'
import houserLarge from '../assets/work/webDev/houser-large.jpg'
import pokemonLarge from '../assets/work/webDev/pokemon-large.jpg'
import pokemonMedium from '../assets/work/webDev/pokemon-medium.jpg'
import sortingMedium from '../assets/work/webDev/sorting-medium.jpg'
import sortingLarge from '../assets/work/webDev/sorting-large.jpg'
import sarahMedium from '../assets/work/webDev/sarah-medium.jpg'
import sarahLarge from '../assets/work/webDev/sarah-large.jpg'
import threadlessLarge from '../assets/work/webDev/threadless-large.jpg';
import threadlessMedium from '../assets/work/webDev/threadless-medium.jpg';

//Videos
import asteroidsVideoLarge from '../assets/videos/asteroids-large.m4v';
import asteroidsVideoMedium from '../assets/videos/asteroids-medium.m4v';

import { Collection } from '../types'

const webDevCollection: Collection = {
  skillSize: '1rem',
  skills: [
    {
      img: javascript,
      title: "JavaScript",
      className: ''
    },
    {
      img: react,
      title: "React",
      className: ''
    },
    {
      img: angular,
      title: "Angular.js",
      className: ''
    },
    {
      img: html,
      title: "HTML 5",
      className: 'non-import'
    },
    {
      img: css,
      title: "CSS 3",
      className: 'non-import'
    },
    {
      img: express,
      title: "Express",
      className: ''
    },
    {
      img: node,
      title: "Node.js",
      className: ''
    },
    {
      img: graphQL,
      title: "GraphQL",
      className: ''
    },
    {
      img: redux,
      title: "Redux",
      className: ''
    },
    {
      img: postgres,
      title: "PostgreSQL",
      className: ''
    },
    {
      img: sass,
      title: "Sass/Scss",
      className: 'non-import-small'
    },
    {
      img: jest,
      title: "Jest",
      className: 'non-import-small'
    },
    {
      img: github,
      title: "GitHub",
      className: 'non-import'
    },
    {
      img: socket,
      title: "Socket.io",
      className: ''
    },
  ],
  projects: [
    {
      imgMedium: asteroidThumb,
      videoMedium: asteroidsVideoMedium,
      videoLarge: asteroidsVideoLarge,
      title: 'Asteroids',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Vanilla js'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:asteroids.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/Asteroids-canvas-sockets' }]
    },
    {
      imgMedium: sarahMedium,
      imgLarge: sarahLarge,
      title: "Sarah's Paw Prints",
      text: "This site was designed by me and created to show off the portfolio of a friend. This was the first site I made with the intent to be viewed on as many devices and browsers as possible because of this careful attention was given to responsiveness. I used amazon S3 for file storage and am working on giving the owner the ability to upload and manage the photos on the site.",
      type: ['Angular.js'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:sarahspawprints.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/sarahs-paw-print' }]
    },
    {
      imgMedium: houserMedium,
      imgLarge: houserLarge,
      title: "Houser Helper",
      text: "I started this site as a review for a class I was teching to use React.js, Redux, and Node.js. The review lasted 3 days and after a few more days work I finished this site.",
      type: ['React'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:houserhelper.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/Houser-Helper' }]
    },
    {
      imgMedium: pokemonMedium,
      imgLarge: pokemonLarge,
      title: "Pokemon Catcher",
      text: "I made this using React.js and Node.js in an evening as an example to the students at DevMountain of what a small project could look like.",
      type: ['React'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:pokemon.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/Pokemon-Catcher-No-Database' }]
    },
    {
      imgMedium: sortingMedium,
      imgLarge: sortingLarge,
      title: "Sorting Hat",
      text: "This site was made in an evening with a class of students with the goal to teach them React.js and how components and props work. In addition it is using a Node.js server to hold the data for the site.",
      type: ['React'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:sortinghat.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/React-Sorting-Hat' }]
    }, {
      imgMedium: threadlessMedium,
      imgLarge: threadlessLarge,
      title: "Threadless Clone",
      text: "This site was cloned using AngularJS, NodeJS and PostgreSQL. I built this over 3 weeks as my first full stack project.",
      type: ['Angular.js'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:threadless.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/threadless-clone' }]
    }
  ],
  filters: [
    'React',
    'Angular.js',
    'Vanilla js'
  ]
}

export default webDevCollection