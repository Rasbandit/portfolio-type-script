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
import speedChalengeLarge from '../assets/work/education/speed-challenge-large.jpg';
import speedChalengeMedium from '../assets/work/education/speed-challenge-medium.jpg';

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
      title: "Educational Videos",
      className: 'white'
    },
  ],
  projects: [
    {
      imgMedium: compLitImg,
      videoMedium: typingSpeedMedium,
      videoLarge: typingSpeedLarge,
      title: 'Computer Literacy Video Series',
      text: 'While working at DevMountain I found that there were a fair amount of students who lacked what I would consider basic computer skills. It was somthing that the admin was not fully aware of the severity of the issue and I felt like I understood what would be most important for the students to learn. I also had a lot of previous experince with both Winodows and Mac combined with a strong knowlge of keyboard shortcuts and effeciency techniques I created a video series to help students of all skill levels improve their speeed.',
      type: ['Video Series'],
      links: [{ icon: videoSmall, alt: "Video Icon", text: "Series", link: 'https://vimeo.com/album/5349754' }]
    },
    {
      imgMedium: vsCodeImg,
      videoMedium: vsCodeMedium,
      videoLarge: vsCodeLarge,
      title: 'Intro to VS Code Video Series',
      text: 'After spending a lot of time around experinced coders and students I realized that many of them were not spending the time to really learn the tools they have availible to them. I often found myself teaching both staff and students about keyboard shortcuts and features in VS Code that helped their speed. Becaues of this I decided to dig even deeper into VS Code and click on every button and look through as many settings as I could stand. After doing that I created this video series that both showed off many features of the editor but how to use it in an effecient way.',
      type: ['Video Series'],
      links: [{ icon: videoSmall, alt: "Video Icon", text: "Series", link: 'https://vimeo.com/album/5735591' }]
    },
    {
      imgMedium: speedChalengeMedium,
      imgLarge: speedChalengeLarge,
      title: 'Speed Challenge',
      text: 'I knew that just making a video series about how to be more effecient with they keyboard was not going to inspire people to take it as seriously as I would want. So I created a standing challenge where you could win a prize would help it get more traction. The challenge required you to perform a series of tasks in under a specific time without using the mouse. For the average computer user they don\'t even realize that using exclusivly the keyboard is possible. Many students expressed their gratitute for the challenge as it helped them move quicker and more effeciantly, in ways they didn\'t realize possible before.',
      type: ['Curriculum'],
      links: [{ icon: gitHubSmall, alt: "GitHub Icon", text: "Repo", link: 'https://github.com/Rasbandit/Super-Speed-Challenge' }]
    },
    {
      imgMedium: gitGoodMedium,
      imgLarge: gitGoodLarge,
      title: 'Git Good Guide',
      text: 'At DevMountain when we taught our students how to use git and github in a group setting using branches and and pull requests I felt like they really struggled to understand just how exactly it was all happening and keeping a mental model of in their head. As I had a lot of experince with Illustrator I decided to make a guide that used a lot of visuals to help communiate what exactly was going on when doing merges and pull requets.',
      type: ['Curriculum'],
      links: [{ icon: gitHubSmall, alt: "GitHub Icon", text: "Repo", link: 'https://github.com/rasbandit/git-good-guide' }]
    },
    {
      imgMedium: toyProblemMedium,
      imgLarge: toyProblemLarge,
      title: 'JS Toy Problems',
      text: 'At DevMountain the mentors had an hour each morning to do a toy problem with their respeted classes. I found that the toy problems were often lacking and not very focused and often didn\'t teach anything new to the students. I felt like that time could be greatly improved if fore thought was given to the days content and create a problem that would help reinforce concepts that students often struggled with. It was a big help at DevMountain as we could now ensure the time was being effectivly used and the matrerial was of good quality.',
      type: ['Curriculum'],
      links: [{ icon: gitHubSmall, alt: "GitHub Icon", text: "Repo", link: 'https://github.com/devmountain/js-toy-problems' }]
    }
  ],
  filters: [
    'Lectures',
    'Video Series',
    'Curriculum'
  ]
}

export default educationCollection