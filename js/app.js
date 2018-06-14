
var duck = document.createElement('div');
duck.className = 'duck';

var main = document.getElementsByTagName('main')[0];
main.appendChild(duck);

topVal = duck.style.top = "200px";
leftVal = duck.style.left = "20px";

window.setInterval(function(){
  topVal = topVal.replace('px', '');
  topVal = parseInt(topVal);
  topVal = topVal-5;
  topVal = topVal + "px";
  console.log(topVal);
  duck.style.top = topVal;
},1000);
