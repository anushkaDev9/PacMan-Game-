var pos = 0;
let pageWidth = window.innerWidth;

var direction = 0;
function get_random_color() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    console.log(color)
    return color;
  }

function Run() {
    let div=document.getElementById('game')
let divWidth=document.getElementById('game').offsetWidth
console.log(divWidth)
  let img = document.getElementById("pacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  if (direction) {
    color=get_random_color()
    console.log(color)
   div.style.backgroundColor=color
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
    direction = 1;
  }

  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}

