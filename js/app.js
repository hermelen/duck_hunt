
var duck = document.createElement('img');
duck.className = 'duck';
duck.src = "../img/duck.png"
duck.style.transition = "1s";

var ouaf = document.createElement('img');
ouaf.className = 'ouaf';
ouaf.src = "../img/ouaf.png"
ouaf.style.transition = "3s";

var main = document.getElementsByTagName('main')[0];
main.appendChild(duck);
main.appendChild(ouaf);


topValOuaf = ouaf.style.bottom = "10px";
leftValOuaf = ouaf.style.left = "500px";

topVal = duck.style.top = "400px";
leftVal = duck.style.left = "500px";

window.setInterval(function(){
  topRandom = getRandomInt(-100,100);
  topVal = topVal.replace('px', '');// ="200"
  topVal = parseInt(topVal);// = 200
  topVal = topVal+topRandom;
  topVal = topVal + "px";
  duck.style.top = topVal;
  leftRandom = getRandomInt(-100,100);
  leftVal = leftVal.replace('px', '');
  leftVal = parseInt(leftVal);
  leftVal = leftVal+leftRandom;
  leftVal = leftVal + "px";
  duck.style.left = leftVal;
},1000);

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
