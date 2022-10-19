
/*     
  // this.onclick1 = this.onclick1.bind(this);
  // square.addEventListener('click', this.onclick1);
square[i].style.backgroundColor = function () { 
 */

var slider = document.getElementById("myRange");
var mainCanvas = document.querySelector('.mainCanvas');
var canvas2 = document.getElementById('subCanvas');
var showCase = document.getElementById('showCase');
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
input1.addEventListener('click', changeBckgrd);

function changeBckgrd(e) {
 var color = e.target.value;
 square = document.querySelectorAll('#square');
 [...square].forEach(function(ele) {
   ele.style.setProperty("background-color", color);
 });
  
}

// 2nd button functionality (change border line color)
input2.addEventListener('click', changeBorder);

function changeBorder(e) {
  var color = e.target.value;
  let newBorder = `1px solid ${color}`;
  square = document.querySelectorAll('#square');
  [...square].forEach(function(ele) {
    ele.style.setProperty("border", newBorder);
  });
 }

 // 3rd button functionality (set to black the background of each square )
 
 blackButton.addEventListener('click', blackenSquare);

function blackenSquare() {

 const square = document.querySelectorAll("#square");

 for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    square[i].style.backgroundColor = 'black';
     });
 }

}

 // 4th button functionality (set to white the background of each square )
 
 whiteButton.addEventListener('click', whitenSquare);

function whitenSquare() {

 const square = document.querySelectorAll("#square");

 for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    square[i].style.backgroundColor = 'white';
     });
 }

}

// 5th button functionality (set to any color the background of each square )
 
input3.addEventListener('click', colorMe);

function colorMe(e) {

  var color = e.target.value;
 const square = document.querySelectorAll("#square");

 for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    square[i].style.backgroundColor = color;
     });
 }

}


// 6th button functionality (set the brightness to lighten the background of each square )
 
lightenButton.addEventListener('click', lightenMe);


let bright = 1;
let dark = 1;

function lightenMe() {
  
  for (let i = 0; i < square.length; i++) {
    
    square[i].addEventListener("click", function() {
      
        if (bright < 2) {   
          bright = bright + 0.2;
          bright = (bright * 100) / 100; 
          console.log(bright);
          square[i].style.setProperty("filter", `brightness(${bright})`);
          } else if (bright >= 2){
            bright = 1;
            square[i].style.setProperty("filter", `brightness(${bright})`);
          }
        
     });
   }
 
 };



// 7th button functionality (set the brightness to darken the background of each square )
 
blackenButton.addEventListener('click', darkenMe);


function darkenMe() {
  
  for (let i = 0; i < square.length; i++) {
    
    square[i].addEventListener("click", function() {
      
        if (dark > 0) {   
          dark = dark - 0.2;
          dark = (dark * 100) / 100; 
          square[i].style.setProperty("filter", `brightness(${dark})`);
          console.log(dark);
          } else if (dark <= 0) {
            dark = 1;
            square[i].style.setProperty("filter", `brightness(${dark})`);
          }
        
     });
   }
 
 };




 // 8th button (this sets everything back to the original state)
clearButton.addEventListener('click', clear);

function clear(e) {

  let originalBorder = `1px solid white`;
  square = document.querySelectorAll('#square');
  [...square].forEach(function(ele) {
    ele.style.setProperty("border", originalBorder);
    ele.style.setProperty("background-color", 'black');
  });
  return;
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

