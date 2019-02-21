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
  skillSize: '1.2rem',
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
      text: 'These were created for a Space Ship Simulator called the Voyager II that is currently running in Lehi, UT. A variety were designed and printed out to be used as signs that directed participants of the simulation where to go and where different sections of the ships were.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=1jfbcNskkYPUs9DaBF6tjmVe9tP25FI5V' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: voyagerMedium,
      imgLarge: voyagerLarge,
      title: 'Voyager II Frame and Background',
      text: 'This was Created to be used as the Primary and style for software that was being created to be used at the Voyager II space simulator in Lehi, UT. It is currently being used in software called Thorium (link below). I also created the background grid design. This was also created to demonstrait the theme and feel we wanted to go for in the rest of the interfaces and wall art.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=1ViGn_kUBz5p4A7l1LbdOxp6HdervIIUR' }, { icon: gitHubSmall, alt: "Full Version Icon", text: "Used In", link: 'https://github.com/Thorium-Sim/thorium' }, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: endeavor,
      videoMedium: endeavorVideo,
      videoLarge: endeavorVideoLarge,
      title: 'Endeavor Logo',
      text: 'The company D-SIM had me create this as an asset for them to use inside their space for a specific ship called the Endeavor. I used After Effects and Video Copilot\'s Elemnt 3D to create the rotating center piece. I Also ensured that the video would loop perfectly as the video is only 7 seconds long.',
      type: ['After Effects'],
      links: [{ icon: videoSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKTTJJNHhOWm1idmM' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: solarSystem,
      videoMedium: ssVideo,
      videoLarge: ssVideoLarge,
      title: 'Solar System',
      text: 'This was made over a few months as a personal side project to test my knowlege of After Effects and Element 3D. the hope for this was to be used as a lobby video for D-SIM and I wanted to fill it with acurate and interesting information that both explained information about the universe of D-SIM and and about the solar system itself. One detail I wored in was I made sure that the planets in the video rotated at an acruate ratio to eachother and that they all had the correct tilt of the axis.',
      type: ['After Effects'],
      links: [{ icon: videoSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKbDhfQnFZSmFIdUU' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: shieldsMedium,
      imgLarge: shieldsLarge,
      title: 'Shields',
      text: 'Me and one other person were hired on By D-SIM to create all the graphics for their new software they were creating. It took us 3 months to create the assets needed for all 60 views. This is one we created that would be used for the shields on the ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKVTVzeXZFRUVSd2s' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },

    {
      imgMedium: borders,
      videoMedium: bordersVideomedium,
      videoLarge: bordersVideoLarge,
      title: 'Borders',
      text: 'I created a lot of what we refered to in the Space Center Industry as "Tactical Cards". These graphics were created to display information on a large TV in the space ship to help illustrait what was going on at that current time in the mission. I helped make a few for a mission that the Voyager II simulator used in its mission.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKeGVJX2wwc0lsNm8' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: linesMedium,
      imgLarge: linesLarge,
      title: 'Connections',
      text: 'Me and one other person were hired on By D-SIM to create all the graphics for their new software they were creating. It took us 3 months to create the assets needed for all 60 views. This was supposed to be a mini game the participants would do the help fix broken systems on the ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKTHdLY040dVFkMFk' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: wallartMedium,
      imgLarge: wallartLarge,
      title: 'Voyager II Wall Art',
      text: 'This was addional wall art that I help create that were printed and used in the Voyager II simulator. These were created with the knowlege that many of them would be backlit to really show off the color choices and to really give it the illusion of being interactive.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=1Mvg4tuiKyxC8yqbqgtbUj3ApyGPLg_je' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: tlmMedium,
      imgLarge: tlmLarge,
      title: 'Twisty Light Machine',
      text: 'Me and one other person were hired on By D-SIM to create all the graphics for their new software they were creating. It took us 3 months to create the assets needed for all 60 views. This particular view was a lot of fun and a challenge, as the hope was that the user would twist the complex looking wire thing in the middle and it would line up with the connections on the outside. But we wanted to make sure that each wire would line up with a nuber or spots in different ways so it took a lot rotating and fine tuning to make it look just right.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKaHNiTlBkSG9mUnc' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: comms,
      videoMedium: comVideo,
      videoLarge: comVideoLarge,
      title: 'Communications',
      text: 'I created a lot of what we refered to in the Space Center Industry as "Tactical Cards". These graphics were created to display information on a large TV in the space ship to help illustrait what was going on at that current time in the mission. This particular one was a challenge as I wanted to make what looked like a sound wave getting translated in english one way, and into an alien language the other way. A big challege with a lot of these kind of videos was to make it a way that looped perfectly, so making an audio file that the sound waves were based off repeat perfectly was a bit of a challenge. But after a lot of work I was able to get it to loop seemlesly.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKY0pzY0JEMW9JUGM' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: c,
      videoMedium: cVideo,
      videoLarge: cVideoLarge,
      title: 'Computer Screen',
      text: 'I created a lot of what we refered to in the Space Center Industry as "Tactical Cards". These graphics were created to display information on a large TV in the space ship to help illustrait what was going on at that current time in the mission. This was a small proof of concept I wanted to make that we called a C-screen. Its purpose was just to display a visually intereting looping video that would fill the screen while there was nothing of importance to show.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKeWNFX0I0a3o5eG8' }, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
  ],
  filters: [
    'Illustrator',
    'After Effects',
  ]
}

export default adobeCollection