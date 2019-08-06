'use strict';

const text= document.querySelector('.text');
let counter = 0;
let temp;


const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  console.log(counter);
  if(counter >= 15){
  text.innerHTML = `<p class="message">Su sesión ha expirado.</p>`; 
  clearInterval(temp);
  }
}

temp = setInterval(incrementAndShowCounter, 1000); 