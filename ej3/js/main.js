'use strict';

const container= document.querySelector('.text-container');
console.log(container);
let counter = 0;
let temp;


const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if(counter < 5){
	container.innerHTML = (`<p class="text">Escrito hace ${counter} segundos </p>`); 
}else if(counter >= 5 && counter < 10){
	container.innerHTML = (`<p class="text">Escrito hace 1 minuto </p>`); 
  }else{
	container.innerHTML = (`<p class="text">Escrito hace 2 minutos </p>`); 
  }
}

temp = setInterval(incrementAndShowCounter, 1000); 