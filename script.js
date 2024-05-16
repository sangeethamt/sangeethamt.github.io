let button = document.getElementById('project1');



// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
event.target.style.backgroundColor=randomColor;
}

button.addEventListener('mouseover',colorChange);
