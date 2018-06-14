
var duck = document.createElement('img');
duck.className = 'duck';
duck.src = "../img/duck.png"
duck.style.transition = "0.5s";
duck.addEventListener("click",function(){
    duck.style.display = "none"
})
var duck2 = document.createElement('img');
duck2.className = 'duck2';
duck2.src = "../img/duck.png"
duck2.style.transition = "0.5s";
duck2.addEventListener("click",function(){
    duck2.style.display = "none"
})

console.log(duck);
var ouaf = document.createElement('img');
ouaf.className = 'ouaf';
ouaf.src = "../img/ouaf.png"
ouaf.style.transition = "3s";

var main = document.getElementsByTagName('main')[0];
main.appendChild(duck);
main.appendChild(duck2);
main.appendChild(ouaf);


bottomValOuaf = ouaf.style.bottom = "10px";
leftValOuaf = ouaf.style.left = "500px";

bottomVal = duck.style.bottom = "-20px";
leftVal = duck.style.left = "500px";

bottomVal2 = duck2.style.bottom = "-20px";
leftVal2 = duck2.style.left = "100px";


window.setInterval(function(){
  topRandom = getRandomInt(0,100);
  bottomVal = bottomVal.replace('px', '');// ="200"
  bottomVal = parseInt(bottomVal);// = 200
  bottomVal = bottomVal+topRandom;
  bottomVal = bottomVal + "px";
  duck.style.bottom = bottomVal;
  leftRandom = getRandomInt(-300,300);
  leftVal = leftVal.replace('px', '');
  leftVal = parseInt(leftVal);
  leftVal = leftVal+leftRandom;
  leftVal = leftVal + "px";
  duck.style.left = leftVal;
},500);

window.setInterval(function(){
  topRandom2 = getRandomInt(0,100);
  bottomVal2 = bottomVal2.replace('px', '');// ="200"
  bottomVal2 = parseInt(bottomVal2);// = 200
  bottomVal2 = bottomVal2+topRandom2;
  bottomVal2 = bottomVal2 + "px";
  duck2.style.bottom = bottomVal2;
  leftRandom2 = getRandomInt(-300,300);
  leftVal2 = leftVal2.replace('px', '');
  leftVal2 = parseInt(leftVal2);
  leftVal2 = leftVal2+leftRandom2;
  leftVal2 = leftVal2 + "px";
  duck2.style.left = leftVal2;
},500);

window.setInterval(function(){
  leftRandomOuaf = getRandomInt(-1000,1000);
  leftValOuaf = leftVal.replace('px', '');
  leftValOuaf = parseInt(leftValOuaf);
  leftValOuaf = leftValOuaf+leftRandomOuaf;
  leftValOuaf = leftValOuaf + "px";
  ouaf.style.left = leftValOuaf;
},3000);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
