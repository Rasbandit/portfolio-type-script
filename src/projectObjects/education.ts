//Icons
import curriculum from '../assets/work/education/icons/curriculum.svg';
import publicSpeaking from '../assets/work/education/icons/public-speaking.svg';
import teaching from '../assets/work/education/icons/teaching.svg';
import video from '../assets/work/education/icons/video.svg';

//link Icons
import gitHubSmall from '../assets/icons/git-hub-small.svg';
import videoSmall from '../assets/icons/video-small.svg';

//Thumbnails
import compLitImg from '../assets/work/education/computer-literacy.jpg';
import vsCodeImg from '../assets/work/education/vs-code-intro.jpg';
import gitGoodLarge from '../assets/work/education/git-good-large.jpg';
import gitGoodMedium from '../assets/work/education/git-good-medium.jpg';
import toyProblemMedium from '../assets/work/education/toy-problem-medium.jpg';
import toyProblemLarge from '../assets/work/education/toy-problem-large.jpg';

//Videos
import typingSpeedLarge from '../assets/videos/typing-speed-large.m4v';
import typingSpeedMedium from '../assets/videos/typing-speed-medium.m4v';
import vsCodeMedium from '../assets/videos/vs-code-medium.m4v';
import vsCodeLarge from '../assets/videos/vs-code-large.m4v';

import { Collection } from '../types'

const educationCollection: Collection = {
  skillSize: '1.5rem',
  skills: [
  {
    img: curriculum,
    title: "Curriculum Development",
    className: 'white'
  },
  {
    img: publicSpeaking,
    title: "Public Speaking",
    className: 'white'
  },
  {
    img: teaching,
    title: "Teaching",
    className: 'white'
  },
  {
    img: video,
    title: "Video Education",
    className: 'white'
  },
],
  projects: [
    {
      imgMedium: compLitImg,
      videoMedium: typingSpeedMedium,
      videoLarge: typingSpeedLarge,
      title: 'Computer Literacy Video Series',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: ['Video Series'],
      links: [{icon: videoSmall, alt:"Video Icon", text: "Series", link: 'https://vimeo.com/album/5349754'}]
    },
    {
      imgMedium: vsCodeImg,
      videoMedium: vsCodeMedium,
      videoLarge: vsCodeLarge,
      title: 'Intro to VS Video Series',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: ['Video Series'],
      links: [{icon: videoSmall, alt:"Video Icon", text: "Series", link: 'https://vimeo.com/album/5735591'}]
    },
    {
      imgMedium: gitGoodMedium,
      imgLarge: gitGoodLarge,
      title: 'Git Good Guide',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: ['Curriculum'],
      links: [{icon: gitHubSmall, alt:"GitHub Icon", text: "Repo", link: 'https://github.com/rasbandit/git-good-guide'}]
    },
    {
      imgMedium: toyProblemMedium,
      imgLarge: toyProblemLarge,
      title: 'JS Toy Problems',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: ['Curriculum'],
      links: [{icon: gitHubSmall, alt:"GitHub Icon", text: "Repo", link: 'https://github.com/devmountain/js-toy-problems'}]
    }
  ],
  filters: [
    'Lectures',
    'Video Series',
    'Curriculum'
  ]
}

export default educationCollection