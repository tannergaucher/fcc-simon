let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let sound1 = document.getElementById('sound1');
let sound2 = document.getElementById('sound2');
let sound3 = document.getElementById('sound3');
let sound4 = document.getElementById('sound4');
let onSwitch = document.getElementById('checkbox');
let controls = document.getElementById('controls');
let simonBody = document.getElementById('simon');
let start = document.getElementById('start');
let counter = document.getElementById('counter');
let strictLight = document.getElementById('strict-light');
let buttons = document.querySelectorAll('div.button');

let colors = ['red', 'green', 'blue', 'yellow'];
let count = 1;
let que = [];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// 1. simon chooses random color, clicks 
function simon() {
  console.log('simon call');
  let rand = getRandomColor();
  que.push(rand);
  document.getElementById(rand).click();
}

function player(button) {
  if (button === que[count - 1]) {
    console.log("match");
    count++;
    //next turn
    simon();

  } else {
    console.log('nope. restart');
    count = 1;
    //restart()
  }
}

// 3. compare arrays for match
function check() {

}

function switchOn() {
  if (onSwitch.checked === true) {
    controls.classList.add('on');
    controls.classList.remove('off');
    powerButtons();
  }
  if (onSwitch.checked === false) {
    controls.classList.add('off');
    controls.classList.remove('on');
    counter.classList.add('off');
    powerButtons();
  }
}
switchOn();

function powerButtons() {
  buttons.forEach(function(button) {
    button.classList.toggle('buttons-off');
  })
}

start.addEventListener('click', function() {
  counter.classList.toggle('off');
  //simon();
})

strictLight.addEventListener('click', function() {
  strictLight.classList.toggle('strict-light-on');
})

onSwitch.addEventListener('click', switchOn);

red.addEventListener('click', function() {
  sound1.play();
})

green.addEventListener('click', function() {
  sound2.play();
})

blue.addEventListener('click', function() {
  sound3.play();
})

yellow.addEventListener('click', function() {
  sound4.play();
})