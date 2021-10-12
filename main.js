import { render } from './render.js';

render();

// ADD
const btn = document.querySelector('.btn');

btn.onclick = () => {
  const { value: newHabit } = document.querySelector('#input');
  console.log(newHabit);
};
