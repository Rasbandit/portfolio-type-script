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
      text: 'These were created for a Space Ship Simulator called the Voyager II that is currently running in Lehi, UT. A variety of similar signs were designed and printed out to be used as decals or signs that directed participants of the simulation where to go.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=1jfbcNskkYPUs9DaBF6tjmVe9tP25FI5V' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: voyagerMedium,
      imgLarge: voyagerLarge,
      title: 'Voyager II Frame and Background',
      text: 'This was created for a space simulator called the Voyager II in Lehi, UT. I designed to have a similar feel and color pallet to the existing simulator. It was also the first graphic to be made the simulator and became a reference point for future art and graphics to be used. It is currently being used in software called Thorium (link below).',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=1ViGn_kUBz5p4A7l1LbdOxp6HdervIIUR' }, { icon: gitHubSmall, alt: "Full Version Icon", text: "Used In", link: 'https://github.com/Thorium-Sim/thorium' }, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: endeavor,
      videoMedium: endeavorVideo,
      videoLarge: endeavorVideoLarge,
      title: 'Endeavor Logo',
      text: 'The company D-SIM had me create this as an asset to use inside a specific ship called the Endeavor. They provided me a 2D image of the logo and I created it in 3D using After Effects and Video Copilot\'s Element 3D. I Also ensured that the video would loop perfectly as the video is only 7 seconds long and would be shown for a long duration of time.',
      type: ['After Effects'],
      links: [{ icon: videoSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKTTJJNHhOWm1idmM' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: solarSystem,
      videoMedium: ssVideo,
      videoLarge: ssVideoLarge,
      title: 'Solar System',
      text: 'This was made over a few months as a personal side project to test my knowledge of After Effects and Element 3D. the hope for this was to be used as a lobby video for D-SIM and I wanted to fill it with accurate and interesting information that both explained information about the universe of D-SIM and and about the solar system itself. One detail I worked in making sure that the planets in the video rotated at an arcuate ratio to each other and that they all had the correct tilt of the axis.',
      type: ['After Effects'],
      links: [{ icon: videoSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKbDhfQnFZSmFIdUU' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: shieldsMedium,
      imgLarge: shieldsLarge,
      title: 'Shields',
      text: 'Me and my design partner were hired on By D-SIM to create all the graphics for their new software they were creating. It took us 3 months to create the assets needed for all 60 views. This is one we created that would be used for the shields on the ship.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKVTVzeXZFRUVSd2s' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },

    {
      imgMedium: borders,
      videoMedium: bordersVideomedium,
      videoLarge: bordersVideoLarge,
      title: 'Borders',
      text: 'I created a lot of what we referred to as "Tactical Cards" in Space Centerdom. These visuals were created to convey information on a large TV in the space ship  and to help illustrate what was going on at that current time in the mission.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKeGVJX2wwc0lsNm8' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: linesMedium,
      imgLarge: linesLarge,
      title: 'Connections',
      text: 'Me and my design partner were hired on By D-SIM to create all the graphics for their new software they were creating. It took us 3 months to create the assets needed for all 60 views. This was a mini game that we conceptualized to make repairing broken systems on the ship more engaging.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKTHdLY040dVFkMFk' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: wallartMedium,
      imgLarge: wallartLarge,
      title: 'Voyager II Wall Art',
      text: 'This was additional wall art that I help create that were printed and used in the Voyager II simulator. These were created with the knowledge that many of them would be backlit to really show off the color choices and to really give it the illusion of being interactive.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=1Mvg4tuiKyxC8yqbqgtbUj3ApyGPLg_je' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: tlmMedium,
      imgLarge: tlmLarge,
      title: 'Twisty Light Machine',
      text: 'Me and my design partner were hired on By D-SIM to create all the graphics for their new software they were creating. It took us 3 months to create the assets needed for all 60 views. This particular view was a lot of fun and a challenge. The user would twist the complex looking wire thing in the middle and it would line up with the connections on the outside. But we wanted to make sure that each wire would line up with a number or spots in different ways so it took a lot rotating and fine tuning to make it look just right.',
      type: ['Illustrator'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKaHNiTlBkSG9mUnc' }, infinid, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: comms,
      videoMedium: comVideo,
      videoLarge: comVideoLarge,
      title: 'Communications',
      text: 'I created a lot of what we referred to as "Tactical Cards" in Space Centerdom. These visuals were created to convey information on a large TV in the space ship  and to help illustrate what was going on at that current time in the mission. This particular one was a challenge as I wanted to make what looked like a sound wave getting translated in english one way, and into an alien language the other way. A big challenge with a lot of these kind of videos was to make it so that it looped perfectly. Because of this making an audio file that looped perfectly was a challenge, then to get the sound waves on the screen to have no seams either was a bit of a challenge. But after a lot of work I was able to get it to loop seamlessly.',
      type: ['After Effects'],
      links: [{ icon: fullVersionSmall, alt: "Full Version Icon", text: "Full", link: 'https://drive.google.com/open?id=0B2kjzXYkWALKY0pzY0JEMW9JUGM' }, voyager, { icon: portfolioSmall, alt: "Portfolio Icon", text: "Portfolio", link: portfolioLink }]
    },
    {
      imgMedium: c,
      videoMedium: cVideo,
      videoLarge: cVideoLarge,
      title: 'Computer Screen',
      text: 'I created a lot of what we referred to as "Tactical Cards" in Space Centerdom. These visuals were created to convey information on a large TV in the space ship  and to help illustrate what was going on at that current time in the mission. This was a small proof of concept I wanted to make of what we called a C-screen, or computer screen. Its purpose was just to display a visually interesting things of no consequence to fill the screen between plot points.',
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