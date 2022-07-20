const selection1 = document.getElementById('selection-1');
const selection2 = document.getElementById('selection-2');
const selection3 = document.getElementById('selection-3');

const description1 = document.getElementById('description-1');
const description2 = document.getElementById('description-2');
const description3 = document.getElementById('description-3');

selection1.addEventListener('click', function(){
    description1.style.display = "block";
    description2.style.display = "none";
    description3.style.display = "none";
    selection1.style.backgroundColor = "#18898b";
    selection2.style.removeProperty("background-color");
    selection3.style.removeProperty("background-color");
 });

selection2.addEventListener('click', function(){
    description1.style.display = "none";
    description2.style.display = "block";
    description3.style.display = "none";
    selection1.style.removeProperty("background-color");
    selection2.style.backgroundColor = "#18898b";
    selection3.style.removeProperty("background-color");

 });

 selection3.addEventListener('click', function(){
    description1.style.display = "none";
    description2.style.display = "none";
    description3.style.display = "block";
    selection1.style.removeProperty("background-color");
    selection2.style.removeProperty("background-color");
    selection3.style.backgroundColor = "#18898b";
 });

selection1.style.backgroundColor = "#18898b"

const secretOverlay = document.getElementById("secret-overlay")
const codeBreaker = document.getElementById("code-breaker")

document.addEventListener('keydown', function (e){
   const breaker = document.getElementById('breaker')
   if (e.key === "Enter"){
      if (breaker.value.toLowerCase() === 'jeremy'){
         codeBreaker.remove()
         secretOverlay.style.display = 'block'
      }
      
      else {
         breaker.value = ''
      }
      
   }
})



