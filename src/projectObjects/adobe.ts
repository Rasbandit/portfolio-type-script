//Icons
import afterEffects from '../assets/work/adobe/icons/After_Effects.svg';
import audition from '../assets/work/adobe/icons/audition.svg';
import illustrator from '../assets/work/adobe/icons/Illustrator.svg';
import photoshop from '../assets/work/adobe/icons/Photoshop.svg';
import premiere from '../assets/work/adobe/icons/Premiere.svg';

//link Icons
import internetSmall from '../assets/icons/internet-small.svg';
import gitHubSmall from '../assets/icons/git-hub-small.svg';
import fullVersionSmall from '../assets/icons/full-version.svg';
import portfolioSmall from '../assets/icons/portfolio-icon.svg';
import videoSmall from '../assets/icons/video-small.svg';


//assets
import c from '../assets/work/adobe/c.jpg';
import comms from '../assets/work/adobe/comms.jpg';
import linesMedium from '../assets/work/adobe/lines-medium.jpg';
import linesLarge from '../assets/work/adobe/lines-large.jpg';
import tlmMedium from '../assets/work/adobe/tlm-medium.jpg';
import tlmLarge from '../assets/work/adobe/tlm-large.jpg';
import shieldsMedium from '../assets/work/adobe/shields-medium.jpg';
import shieldsLarge from '../assets/work/adobe/shields-large.jpg';
import signsLarge from '../assets/work/adobe/signs-large.jpg';
import signsMedium from '../assets/work/adobe/signs-medium.jpg';
import voyagerLarge from '../assets/work/adobe/voyager-2-large.jpg';
import voyagerMedium from '../assets/work/adobe/voyager-2-medium.jpg';
import wallartMedium from '../assets/work/adobe/wallart-medium.jpg';
import wallartLarge from '../assets/work/adobe/wallart-large.jpg';
import endeavor from '../assets/work/adobe/endeavor.jpg';
import solarSystem from '../assets/work/adobe/solar-system.jpg';
import borders from '../assets/work/adobe/borders.jpg';

//Videos
import endeavorVideo from '../assets/videos/endeavor.m4v';
import endeavorVideoLarge from '../assets/videos/endeavor-large.m4v';
import cVideo from '../assets/videos/c.m4v';
import cVideoLarge from '../assets/videos/C-large.m4v';
import ssVideo from '../assets/videos/solar-system.m4v';
import ssVideoLarge from '../assets/videos/solar-system-large.m4v';
import comVideo from '../assets/videos/comm.m4v';
import comVideoLarge from '../assets/videos/comm-large.m4v';
import bordersVideoLarge from '../assets/videos/borders-large.m4v';
import bordersVideomedium from '../assets/videos/borders.m4v';

const portfolioLink = 'https://drive.google.com/drive/folders/0B2kjzXYkWALKfktWMTJCNGNGaS1fenRBQ3NZZHZ6aWN0SnVuc0J6clBZRlBSZGdNMEJtaHM?usp=sharing';

const infinid = { icon: internetSmall, alt: "website Icon", text: "Used In", link: 'http://infinidlearning.com/' };
const voyager = { icon: internetSmall, alt: "website Icon", text: "Used In", link: 'https://farpointcadets.weebly.com/' };

import { Collection } from '../types'

const adobeCollection: Collection = {
  skillSize: '1.6rem',
  skills: [
    {
      img: afterEffects,
      title: "After Effects",
      className: ''
    },
    {
      img: audition,
      title: "Audition",
      className: ''
    },
    {
      img: illustrator,
      title: "Illustrator",
      className: ''
    },
    {
      img: photoshop,
      title: "Photoshop",
      className: ''
    },
    {
      img: premiere,
      title: "Premiere Pro",
      className: ''
    },
  ],
  projects: [
    {
      imgMedium: signsMedium,
      imgLarge: signsLarge,
      title: 'Voyager II Signs',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=1jfbcNskkYPUs9DaBF6tjmVe9tP25FI5V' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: voyagerMedium,
      imgLarge: voyagerLarge,
      title: 'Voyager II Frame and Background',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=1ViGn_kUBz5p4A7l1LbdOxp6HdervIIUR' }, { icon: gitHubSmall, alt: "Full Version Icon", text: "Used In", link: 'https://github.com/Thorium-Sim/thorium' }, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: endeavor,
      videoMedium: endeavorVideo,
      videoLarge: endeavorVideoLarge,
      title: 'Endeavor Logo',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['After Effects'],
      links: [{ icon: videoSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKTTJJNHhOWm1idmM' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: solarSystem,
      videoMedium: ssVideo,
      videoLarge: ssVideoLarge,
      title: 'Solar System',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['After Effects'],
      links: [{ icon: videoSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKbDhfQnFZSmFIdUU' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: shieldsMedium,
      imgLarge: shieldsLarge,
      title: 'Shields',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKVTVzeXZFRUVSd2s' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },

    {
      imgMedium: borders,
      videoMedium: bordersVideomedium,
      videoLarge: bordersVideoLarge,
      title: 'Borders',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKeGVJX2wwc0lsNm8' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: linesMedium,
      imgLarge: linesLarge,
      title: 'Connections',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKTHdLY040dVFkMFk' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: wallartMedium,
      imgLarge: wallartLarge,
      title: 'Voyager II Wall Art',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=1Mvg4tuiKyxC8yqbqgtbUj3ApyGPLg_je' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: tlmMedium,
      imgLarge: tlmLarge,
      title: 'Twisty Light Machine',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKaHNiTlBkSG9mUnc' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: comms,
      videoMedium: comVideo,
      videoLarge: comVideoLarge,
      title: 'Communications',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKY0pzY0JEMW9JUGM' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: c,
      videoMedium: cVideo,
      videoLarge: cVideoLarge,
      title: 'Computer Screen',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full Res", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKeWNFX0I0a3o5eG8' }, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
  ],
  filters: [
    'Illustrator',
    'After Effects',
  ]
}

export default adobeCollection