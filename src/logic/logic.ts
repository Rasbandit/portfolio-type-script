export function setSize() {
  var incX;
  var incY;
  var columns;
  var gap;
  const ratioKeeper = 1.763;

  if (window.innerWidth > 3000) {
    document.getElementsByTagName('html')[0].style.fontSize = '20px'
    incX = window.innerWidth / 8;
    incY = incX / ratioKeeper;
    columns = 3
    gap = 60;
  }

  else if (window.innerWidth <= 3000 && window.innerWidth > 2500) {
    document.getElementsByTagName('html')[0].style.fontSize = '16px'
    incX = window.innerWidth / 8;
    incY = incX / ratioKeeper;
    columns = 3
    gap = 50;
  }

  else if (window.innerWidth <= 2500 && window.innerWidth > 1900) {
    document.getElementsByTagName('html')[0].style.fontSize = '13px'
    incX = window.innerWidth / 7.4;
    incY = incX / ratioKeeper;
    columns = 3
    gap = 30;
  }

  else if (window.innerWidth <= 1900 && window.innerWidth > 1600) {
    document.getElementsByTagName('html')[0].style.fontSize = '12px'
    incX = window.innerWidth / 6.2;
    incY = incX / ratioKeeper;
    columns = 3
    gap = 25;
  }

  else if (window.innerWidth <= 1600 && window.innerWidth > 1100) {
    incX = window.innerWidth / 3.3;
    incY = incX / ratioKeeper;
    columns = 2;
    gap = 20;
  }

  else if (window.innerWidth <= 1100 && window.innerWidth > 950) {
    incX = window.innerWidth / 3.3;
    incY = incX / ratioKeeper;
    columns = 2;
    gap = 15;
  }

  else if (window.innerWidth <= 950 && window.innerWidth > 700) {
    incX = window.innerWidth / 2.55;
    incY = incX / ratioKeeper;
    columns = 2;
    gap = 15
  }

  else if (window.innerWidth <= 700 && window.innerWidth > 500) {
    incX = window.innerWidth / 1.23;
    incY = incX / ratioKeeper;
    columns = 1;
    gap = 10
  }
  else {
    incX = window.innerWidth / 1.14;
    incY = incX / ratioKeeper;
    columns = 1;
    gap = 5
  }
  const obj: any = { incX, incY, columns, gap, x: gap, y: 0 }
  return obj
}
