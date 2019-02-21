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
import socket from '../assets/work/webDev/icons/socket-io.svg';
import express from '../assets/work/webDev/icons/express.svg';
import typeScript from '../assets/work/webDev/icons/ts.svg';
import vue from '../assets/work/webDev/icons/vue.svg';

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
      img: typeScript,
      title: "TypeScript",
      className: ''
    },
    {
      img: react,
      title: "React",
      className: ''
    },
    {
      img: angular,
      title: "AngularJS",
      className: ''
    },
    {
      img: vue,
      title: "Vue",
      className: ''
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
      text: 'I had this idea for a simple game where you could asteroids in a co-oprative way where one person could fly the ship, and another could shoot. I knew I would need to learn how exactly the HTML canvas API worked so I found a lot of tutorials and after a long time was able to build out this application. But it was only single player, so I had to do a lot of refactoring to adjust for a lot of different factors. First I needed to use sockets so that the players could have real time updates between their clients. This forced to to move most of the logic into a server and make the server into the host of the game that would broadcast out to all the connect clients what the state of the game was. Because of this I learned how to use sockets and how to do state manetment on the server over a socket connection.',
      type: ['Vanilla'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:asteroids.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/Asteroids-canvas-sockets' }]
    },
    {
      imgMedium: sarahMedium,
      imgLarge: sarahLarge,
      title: "Sarah's Paw Prints",
      text: "I designed and created this site for a friend to showcase their art protfolio and so others could get in contact with her to commision art using NodeMailer. This was also my first attempt at actually putting a site into production so a lot of care was given to making sure the site was responsive and looked good on all screen sizes. I had to do a bit of image compressing to ensure the load times was as fast as it could be. I also built an admin interface so she could add more images by uploading them to Amazon-s3 and I keep the url's in a PostgreSQL database.",
      type: ['AngularJS'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:sarahspawprints.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/sarahs-paw-print' }]
    },
    {
      imgMedium: houserMedium,
      imgLarge: houserLarge,
      title: "Houser Helper",
      text: "I started this project as a review for my class while in Arizona that lasted 3 days. Because I had already put so much time into it I wanted to finish it off. I used React.js, Node, Express and PostgreSQL. This was the first Full-Stack project I built using React and it really helped me solidify my understanding of it.",
      type: ['React'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:houserhelper.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/Houser-Helper' }]
    },
    {
      imgMedium: pokemonMedium,
      imgLarge: pokemonLarge,
      title: "Pokemon Catcher",
      text: "At DevMountain the first project we have students build we called the 'no-db' project. I created this in an evening as an example of what the project could look like. It used the Pokemon Api as its base and all the information of what pokemon was caught is stored on a server. The purpose of the project was to show of how full CRUD works using an express server.",
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
      text: "This was the first full stack project that I built. It used Angular 1x as the front end frame work and Node.js/express as the backend, as well as PostgreSQL as the database. I wanted to show that I could recreate a layout from an existing one using just plain HTML and CSS with out any CSS framework. Because of this I felt like my CSS skills really developed well as I used Angular's conditional classes to really show off my understanding of how those two can work together.",
      type: ['AngularJS'],
      links: [{ icon: internetSmall, alt: "Website", text: "Website", link: 'https:threadless.toddrasband.com/' }, { icon: gitHubSmall, alt: "github", text: "Repo", link: 'https:github.com/Rasbandit/threadless-clone' }]
    }
  ],
  filters: [
    'React',
    'AngularJS',
    'Vanilla'
  ]
}

export default webDevCollection