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
import speedChallengeLarge from '../assets/work/education/speed-challenge-large.jpg';
import speedChallengeMedium from '../assets/work/education/speed-challenge-medium.jpg';

//Videos
import typingSpeedLarge from '../assets/videos/typing-speed-large.m4v';
import typingSpeedMedium from '../assets/videos/typing-speed-medium.m4v';
import vsCodeMedium from '../assets/videos/vs-code-medium.m4v';
import vsCodeLarge from '../assets/videos/vs-code-large.m4v';

import { Collection } from '../types'

const educationCollection: Collection = {
  skillSize: '1.1rem',
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
      audio: true,
      title: 'Computer Literacy Video Series',
      text: 'While working at DevMountain I found that there were a fair amount of students who lacked what I would consider basic computer skills. The administration was not fully aware of the severity of the issue and I felt like I understood what would be most important for the students to learn. I also had a lot of previous experience with both Windows and Mac, combined with a strong knowledge of keyboard shortcuts and efficiency techniques I created a video series to help students of all skill levels improve their speed.',
      type: ['Video Series'],
      links: [{ icon: videoSmall, alt: "Video Icon", text: "Series", link: 'https://vimeo.com/album/5349754' }]
    },
    {
      imgMedium: vsCodeImg,
      videoMedium: vsCodeMedium,
      videoLarge: vsCodeLarge,
      audio: true,
      title: 'Intro to VS Code Video Series',
      text: 'After spending a lot of time around experienced coders and students I realized that many of them were not spending the time to really learn the tools they use on a daily basis. I often found myself teaching both staff and students about keyboard shortcuts and features in VS Code that helped their speed. Because of this I decided to dig even deeper into VS Code and click on every button and look through as many settings as I could stand. After doing that I created this video series that both showed off many features of the editor and how to use it more efficiently.',
      type: ['Video Series'],
      links: [{ icon: videoSmall, alt: "Video Icon", text: "Series", link: 'https://vimeo.com/album/5735591' }]
    },
    {
      imgMedium: speedChallengeMedium,
      imgLarge: speedChallengeLarge,
      title: 'Speed Challenge',
      text: 'I knew that just making a video series about how to be more efficient with the keyboard was not going to inspire people to take it as seriously as I would want. So I created a standing challenge that if completed in under a certain time would win you a prize. The challenge required you to perform a series of tasks without using the mouse. For the average computer user they don\'t even realize that using exclusively the keyboard is even possible. Many students expressed their gratitude for the challenge as it helped them move quicker and more efficiently, in ways they didn\'t realize was possible.',
      type: ['Curriculum'],
      links: [{ icon: gitHubSmall, alt: "GitHub Icon", text: "Repo", link: 'https://github.com/Rasbandit/Super-Speed-Challenge' }]
    },
    {
      imgMedium: gitGoodMedium,
      imgLarge: gitGoodLarge,
      title: 'Git Good Guide',
      text: 'At DevMountain when we taught our students how to use git in a group setting with branches and pull requests I noticed the students still struggled to visualize what was going on.. As I had a lot of experience with Illustrator I decided to make a guide that used a lot of visuals to help illustrate what exactly was going on when doing merges and pull requests.',
      type: ['Curriculum'],
      links: [{ icon: gitHubSmall, alt: "GitHub Icon", text: "Repo", link: 'https://github.com/rasbandit/git-good-guide' }]
    },
    {
      imgMedium: toyProblemMedium,
      imgLarge: toyProblemLarge,
      title: 'JS Toy Problems',
      text: 'At DevMountain the mentors had an hour each morning to do a toy problem with their respected classes. I found that the toy problems were often lacking and not very focused and often didn\'t teach anything new to the students. I felt the time could be used more effectively if more forethought was given to the days content. I created the guide with the aim to create examples that would help reinforce concepts that students often struggled with. It was a big help at DevMountain as we could now ensure the time was being effectively used and the material was of good quality.',
      type: ['Curriculum'],
      links: [{ icon: gitHubSmall, alt: "GitHub Icon", text: "Repo", link: 'https://github.com/devmountain/js-toy-problems' }]
    }
  ],
  filters: [
    'Video Series',
    'Curriculum'
  ]
}

export default educationCollection