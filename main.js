
const slider = document.getElementById("myRange");
const mainCanvas = document.querySelector('.mainCanvas');
const canvas2 = document.getElementById('subCanvas');
const showCase = document.getElementById('showCase');
const bckgroundButton = document.getElementById('btn1');
const changeBorderButton = document.getElementById('btn2');
const blackButton = document.getElementById('btn3');
const whiteButton = document.getElementById('btn4');
const colorButton = document.getElementById('btn5');
const lightenButton = document.getElementById('btn6');
const blackenButton = document.getElementById('btn7');
let clearButton = document.getElementById('btn8');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const wrapper = document.querySelector('.btonContainer');
let square = document.querySelectorAll("#square");


//Function to activate one button at a time

let prevButton = null;

wrapper.addEventListener('click', (e) => {

  if(e.target !== wrapper) {
    e.target.classList.add('active');
    if (prevButton !== null) {
     prevButton.classList.remove('active');
    }
   prevButton = e.target;
  }
 
});


// 1st button functionality (change background color of the main canvas)

input1.addEventListener('click', activateInput1);
input1.addEventListener('input', changeBckgrd);
input1.addEventListener('change', deactivateInput1);



 function activateInput1 (e) {
  bckgroundButton.classList.add('active');
 }

 function changeBckgrd(e) {
  var color = e.target.value;
  square = document.querySelectorAll("#square");
 [...square].forEach(function(ele) {
   ele.style.setProperty("background-color", color);
  });
 }

 function deactivateInput1 (e) {
  bckgroundButton.classList.remove('active');
 }

// 2nd button functionality (change border line color)

input2.addEventListener('click', activateInput2);
input2.addEventListener('input', changeBorder);
input2.addEventListener('change', deactivateInput2);

function activateInput2 (e) {
  changeBorderButton.classList.add('active');
 }

function changeBorder(e) {
  var color = e.target.value;
  let newBorder = `1px solid ${color}`;
  
  [...square].forEach(function(ele) {
    ele.style.setProperty("border", newBorder);
  });
 }

 function deactivateInput2 (e) {
  changeBorderButton.classList.remove('active');
 }

 // 3rd button functionality (set to black the background of each square )

 blackButton.addEventListener('click', blackenSquare);

 function blackenSquare() {
  
   square = document.querySelectorAll("#square");
  
    for (let i = 0; i < square.length; i++) {
      square[i].addEventListener("click", function() {
        square[i].style.removeProperty("filter");
        square[i].style.backgroundColor = 'black';
         });
      }
    } 
  

 // 4th button functionality (set to white the background of each square )

 whiteButton.addEventListener('click', whitenSquare);
 
function whitenSquare() {
  square = document.querySelectorAll("#square");
  
    for (let i = 0; i < square.length; i++) {
      square[i].addEventListener("click", function() {
        square[i].style.removeProperty("filter");
        square[i].style.backgroundColor = 'white';
         });
      }
    }


// 5th button functionality (set to any color the background of each square )

input3.addEventListener('click', activateInput3);
input3.addEventListener('input', colorMe);
input3.addEventListener('change', deactivateInput3);

function activateInput3 (e) {
  colorButton.classList.add('active');
 }

function colorMe(e) {
 
 var color = e.target.value;
 square = document.querySelectorAll("#square");
 for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    square[i].style.removeProperty("filter");
    square[i].style.backgroundColor = color;
     });
  }
}

function deactivateInput3 (e) {
  colorButton.classList.remove('active');
 }

// 6th button functionality (set the brightness to lighten the background of each square )

lightenButton.addEventListener('click', lightenMe);

let bright = 1;

function lightenMe(e) {

   square = document.querySelectorAll("#square"); 
   let test = e.target.classList.contains('active')
   if (test)  {
   for (let i = 0; i < square.length; i++) {
     square[i].addEventListener("click", function() {
     
          if (bright < 2) {   
          bright = bright + 0.2;
          bright = (bright * 100) / 100; 
          square[i].style.setProperty("filter", `brightness(${bright})`);
          } else if (bright == 2){
            bright = 1;
           // square[i].style.setProperty("filter", `brightness(${bright})`);
          }
        });
     }
    }
     if (!test)  {
      for (let i = 0; i < square.length; i++) {
        square[i].outerHTML = square[i].outerHTML;// This will remove all event listeners
       }
     }
    };

// 7th button functionality (set the brightness to darken the background of each square )

blackenButton.addEventListener('click', darkenMe);

let dark = 1;
 
function darkenMe(e) {
  
 square = document.querySelectorAll("#square"); 
 let test = e.target.classList.contains('active');
 if (test)  {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function() {
         if (dark > 0) {   
           dark = dark - 0.2;
           dark = (dark * 100) / 100; 
           square[i].style.setProperty("filter", `brightness(${dark})`);
           } else if (dark <= 0) {
             dark = 1;
            // square[i].style.setProperty("filter", `brightness(${dark})`);
            }
           
      });
    }
  }
    if (!test) { 
    for (let i = 0; i < square.length; i++) {
      square[i].outerHTML = square[i].outerHTML;// This will remove all event listeners
     }
   }
  };


 // 8th button (this sets everything back to the original state)

 clearButton.addEventListener('click', clear);
 
 
function clear() {

  let originalBorder = `1px solid white`;
  square = document.querySelectorAll('#square');
  [...square].forEach(function(ele) {
    ele.style.setProperty("border", originalBorder);
    ele.style.setProperty("background-color", 'gray');
    ele.style.removeProperty("filter");
  });
  
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

