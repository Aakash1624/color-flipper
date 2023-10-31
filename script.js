`use strict`;

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn1 = document.getElementById('btn click-me');
const color = document.querySelector('.color');

//Adding Button Function

btn1.addEventListener('click', () => {
  const randomNumber = getRandomNumber();

  // Adding color to the body

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const hex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn2 = document.getElementById('btn click-me');
const color2 = document.querySelector('.color');

btn2.addEventListener('click', () => {
  //Generating the colors

  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber2()];
  }
  // Adding color to the body

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

const getRandomNumber2 = () => {
  return Math.floor(Math.random() * hex.length);
};
