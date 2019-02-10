export function setSize() {
  var incX = 0;
  var incY = 0;
  var columns = 3;
  var gap = 10;
  const ratioKeeper = 1.763;

  const showCaseContainer = document.getElementById('projects-showcase')

  // if (window.innerWidth > 3000) {
  //   document.getElementsByTagName('html')[0].style.fontSize = '20px'
  //   incX = window.innerWidth / 8;
  //   incY = incX / ratioKeeper;
  //   columns = 3
  //   gap = 60;
  // }

  // else if (window.innerWidth <= 3000 && window.innerWidth > 2500) {
  //   document.getElementsByTagName('html')[0].style.fontSize = '16px'
  //   incX = window.innerWidth / 8;
  //   incY = incX / ratioKeeper;
  //   columns = 3
  //   gap = 50;
  // }

  // else if (window.innerWidth <= 2500 && window.innerWidth > 1900) {
  //   document.getElementsByTagName('html')[0].style.fontSize = '13px'
  //   incX = window.innerWidth / 7.4;
  //   incY = incX / ratioKeeper;
  //   columns = 3
  //   gap = 30;
  // }

  if (showCaseContainer) {
    if (window.innerWidth > 2000) {
      columns = 2
      gap = 35;
    }

    else if (window.innerWidth <= 2000 && window.innerWidth > 1600) {
      columns = 3
      gap = 25;
    }

    else if (window.innerWidth <= 1600 && window.innerWidth > 1000) {
      columns = 3;
      gap = 20;
    }
    else if (window.innerWidth <= 1000 && window.innerWidth > 610) {
      columns = 2;
      gap = 20;
    }
    else {
      columns = 1;
      gap = 0
    }

    incX = (showCaseContainer.clientWidth / columns) - (gap * 1.5)
    incY = incX / ratioKeeper;
  }

  const obj: any = { incX, incY, columns, gap, x: gap, y: 0 }
  return obj
}
