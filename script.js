let player=document.getElementById("player");
let enemy=document.getElementById("enemy");
let coins=document.querySelectorAll(".coin");

let score=0;

let x=20;
let y=20;

document.addEventListener("keydown",function(e){

if(e.key=="ArrowRight") x+=20;

if(e.key=="ArrowLeft") x-=20;

if(e.key=="ArrowUp") y-=20;

if(e.key=="ArrowDown") y+=20;

if(x<0)x=0;

if(y<0)y=0;

if(x>760)x=760;

if(y>460)y=460;

player.style.left=x+"px";

player.style.top=y+"px";

cekCoin();

cekMusuh();

});

function cekCoin(){

coins=document.querySelectorAll(".coin");

coins.forEach(function(c){

let cx=parseInt(c.style.left);

let cy=parseInt(c.style.top);

if(Math.abs(cx-x)<20 && Math.abs(cy-y)<20){

c.remove();

score++;

document.getElementById("score").innerHTML=score;

if(score==5){

alert("Selamat! Anda Menang");

location.reload();

}

}

});

}

let ex=700;
let arah=-5;

setInterval(function(){

ex+=arah;

if(ex<0 || ex>760){

arah*=-1;

}

enemy.style.left=ex+"px";

cekMusuh();

},40);

function cekMusuh(){

if(Math.abs(ex-x)<30 && Math.abs(400-y)<30){

alert("GAME OVER");

location.reload();

}

}
