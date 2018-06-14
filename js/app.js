
var duck = document.createElement('div');
duck.className = 'duck';

var main = document.getElementsByTagName('main')[0];
main.appendChild(duck);

topVal = duck.style.top = "400px";
leftVal = duck.style.left = "500px";

window.setInterval(function(){
  topRandom = getRandomInt(-100,100);
  topVal = topVal.replace('px', '');// ="200"
  topVal = parseInt(topVal);// = 200
  topVal = topVal+topRandom;
  topVal = topVal + "px";
  console.log(topVal);
  duck.style.top = topVal;
  leftRandom = getRandomInt(-100,100);
  leftVal = leftVal.replace('px', '');
  leftVal = parseInt(leftVal);
  leftVal = leftVal+leftRandom;
  leftVal = leftVal + "px";
  duck.style.left = leftVal;
},1000);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
