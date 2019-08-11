// class Hero {
  
// }


let hero = document.getElementById('hero');
let background = document.getElementById('bg');
let enemy = document.getElementById('enemy')
let heroPositionToCenter = 400;
let enemyPositionY = 0;


function leftMove() {
    if(heroPositionToCenter === 0){
        return;
    }
    heroPositionToCenter -= 10;
    hero.style.left = heroPositionToCenter+'px';
}

function rightMove() {
    if(heroPositionToCenter >= 765) {
        return;
    }
    heroPositionToCenter += 10;
    hero.style.left = heroPositionToCenter+'px';
}
function enemyUnderMove(eP) {
   
    if(enemyPositionY >= 526) {
        return;
    }
    enemyPositionY += 20;
    console.log(enemyPositionY)
    enemy.style.top = enemyPositionY+'px'; 
}
window.addEventListener('keydown', e => {

    if(e.keyCode === 37) {
        leftMove()
    }
    if(e.keyCode === 39) {
        rightMove()
    }
})
console.log(Math.floor(Math.random()*800))
window.addEventListener('load', e => {
    let enemyPositionX = Math.floor(Math.random()*765)
    enemy.style.left = enemyPositionX+'px'; 
    enemyUnderMove()
    setInterval(enemyUnderMove,1000)
})