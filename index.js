let positionLeft=0
let divWidth
let direction=0
function load(){
    divWidth=document.getElementById('game')
console.log(divWidth)
console.log(divWidth.offsetWidth)
}
function run(){
    let img=document.getElementById('pacMan')
    let imgWidth=img.width 
    direction=reverse(direction,positionLeft,imgWidth,divWidth)
    if(direction){
        positionLeft-=20;
        img.style.marginLeftt=positionLeft+'px'
    }else{
            positionLeft+=20;
            img.style.marginLeft=positionLeft+'px'
    }
}
setInterval(run,300)
function reverse(direction,positionLeft,imgWidth,divWidth){
    if(positionLeft+imgWidth>=divWidth){
       alert("hello")
    }
    if(positionLeft==0){
       direction=0

    }
return direction
}
