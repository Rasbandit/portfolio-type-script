import { Collection } from '../types'

export function setSize() {
  var incX = 0;
  var incY = 0;
  var columns = 3;
  var gap = 10;
  const ratioKeeper = 1.763;

  const showCaseContainer = document.getElementById('projects-showcase')

  if (showCaseContainer) {
    if (window.innerWidth > 2000) {
      columns = 2
      gap = 35;
      incX = (showCaseContainer.clientWidth / columns) - (gap * 1.3)
    }

    // else if (window.innerWidth <= 2000 && window.innerWidth > 1600) {
    //   columns = 4
    //   gap = 20;
    //   incX = (showCaseContainer.clientWidth / columns) - (gap * 1.35)
    // }

    else if (window.innerWidth <= 2000 && window.innerWidth > 1000) {
      columns = 3;
      gap = 25;
      incX = (showCaseContainer.clientWidth / columns) - (gap * 1.3)
    }
    else if (window.innerWidth <= 1000 && window.innerWidth > 510) {
      columns = 2;
      gap = 20;
      incX = (showCaseContainer.clientWidth / columns) - (gap * 1.5)
    }
    else {
      columns = 1;
      gap = 0
      incX = (showCaseContainer.clientWidth)
    }

    incY = incX / ratioKeeper;
  }

  const obj: any = { incX, incY, columns, gap, x: gap, y: 0 }
  return obj
}


export function preload(...collections: Collection[]): void {
  collections.forEach(collection => {
    collection.skills.forEach(item => {
      const img = new Image();
      img.src = item.img;
    })
    collection.projects.forEach(item => {
      const img = new Image();
      img.src = item.imgMedium;
      const imgLarge = new Image();
      imgLarge.src = item.imgLarge || item.imgMedium;
    })
  })
  const personalImg = new Image()
  personalImg.src = '../assets/profile/portrait.jpg';
}