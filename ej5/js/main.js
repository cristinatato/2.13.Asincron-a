'use strict';

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