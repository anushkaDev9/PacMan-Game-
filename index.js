var pos = 0;
let pageWidth = window.innerWidth;

var direction = 0;


function Run() {
let divWidth=document.getElementById('game').offsetWidth
console.log(divWidth)
  let img = document.getElementById("pacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  if (direction) {
    pos=0
    direction=0
    if(direction==0){
           pos+=30
           img.style.marginLeft=pos+"px"
    }
  }else{
    pos+=30
           img.style.marginLeft=pos+"px"
  }
}
setInterval(Run, 300);

function checkPageBounds(direction, imgWidth, pos, divWidth) {
  if (direction == 0 && pos + imgWidth >(divWidth-200)) {
    console.log(pos + imgWidth)
    direction = 1;
  }

  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}
