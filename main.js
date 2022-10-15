


var slider = document.getElementById("myRange");
var canvas2 = document.getElementById('subCanvas');
var showCase = document.getElementById('showCase');


// Update the current slider value (each time you drag the slider handle)




slider.oninput = function(e) {
   
  let num = e.target.value;
  let initialCount = canvas2.childElementCount;
  let totalSquares = Math.pow(num, 2);
  let balance = totalSquares - initialCount;  
  let newbalance = initialCount - totalSquares; 
  
  
    
    for (let i =1; i <= balance; i++ ){
      if (initialCount < totalSquares) {
      var square = document.createElement('div');
      square.className = 'square';
      canvas2.appendChild(square);
       } 
      }  

      for (let i =1; i <= newbalance; i++ ){
        if (initialCount > totalSquares) {
          let element = document.querySelector('.square');
          canvas2.removeChild(element);
         } 
        } 

   canvas2.style.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
   canvas2.style.setProperty("grid-template-rows", `repeat(${num}, 1fr)`);

   showCase.innerText = `Grid is: ${num} X ${num}`
}