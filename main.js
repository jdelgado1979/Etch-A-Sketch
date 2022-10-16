


var slider = document.getElementById("myRange");
var mainCanvas = document.querySelector('.mainCanvas');
var canvas2 = document.getElementById('subCanvas');
var showCase = document.getElementById('showCase');
var bckgrdButton = document.getElementById('btn1');
var borderButton = document.getElementById('btn2');
var blackButton = document.getElementById('btn3');
var whiteButton = document.getElementById('btn4');
var colorButton = document.getElementById('btn5');
var lightenButton = document.getElementById('btn6');
var blackenButton = document.getElementById('btn7');
var clearButton = document.getElementById('btn8');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');



// 1st button functionality (change background color of the main canvas)
bckgrdButton.addEventListener('click', changeBckgrd);

function changeBckgrd(e) {
 var color = e.target.value;
 mainCanvas.style.setProperty("background-color", color);
  
}

// 2nd button functionality (change border line color)
input2.addEventListener('click', changeBorder);

function changeBorder(e) {
  var color = e.target.value;
  let initialCount = canvas2.childElementCount;
  let newBorder = `1px solid ${color}`;
  square = document.querySelectorAll('#square');
  [...square].forEach(function(ele) {
    ele.style.setProperty("border", newBorder);
  });
 }

 // 3rd button functionality (set to black the background of each square )
 blackButton.addEventListener('click', blackenSquare);

function blackenSquare(e) {
  
  square = document.getElementById('square');
  square.addEventListener('mousedown', paintBlack);

  function paintBlack(e) {
  square.style.setProperty("background-color", 'black');
  }
 }

// slider functionality

slider.oninput = function(e) {
   
  let num = e.target.value;
  let initialCount = canvas2.childElementCount;
  let totalSquares = Math.pow(num, 2);
  let balance = totalSquares - initialCount;  
  let newbalance = initialCount - totalSquares; 
  
  
    
    for (let i =1; i <= balance; i++ ){
      if (initialCount < totalSquares) {
      var square = document.createElement('div');
      square.id = 'square';
      canvas2.appendChild(square);
       } 
      }  

      for (let i =1; i <= newbalance; i++ ){
        if (initialCount > totalSquares) {
          let element = document.getElementById('square');
          canvas2.removeChild(element);
         } 
        } 

   canvas2.style.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
   canvas2.style.setProperty("grid-template-rows", `repeat(${num}, 1fr)`);

   showCase.innerText = `Grid is: ${num} X ${num}`
}

