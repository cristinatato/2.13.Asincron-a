'use strict';

const container= document.querySelector('.container');
console.log(container);
let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 12) {
    clearInterval(temp);
  }
  container.innerHTML += `
  <img class="uva" src="https://www.foodretail.es/2017/12/28/shoppers/uvas-mandan-Nochevieja-espanola_1177092288_306091_660x372.jpg">
  `;
};

temp = setInterval(incrementAndShowCounter, 1000);

// Para hacerlo de otra forma 

//function contador () {
//   counter++;
//   const image = document.createElement('img');
//   image.classList.add('uva');
//   image.src = "";
//   image.alt="";
//   container.appendChild(image);
//   if (counter === 12) {
//     clearInterval(temp);
//   }
// }

// temp = setInterval(incrementAndShowCounter, 1000);