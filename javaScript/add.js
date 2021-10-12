import { getLocalStorage } from './getStorage.js';
import { render } from './render.js';

const btn = document.querySelector('.btn');

btn.onclick = () => {
  const input = document.querySelector('#input');

  const { value: newHabit } = input;

  newHabit && add(newHabit);
};

function add(newHabit) {
  const habitList = getLocalStorage();
  const newList = habitList ? [...habitList, newHabit] : [newHabit];

  localStorage.setItem('habits', JSON.stringify(newList));

  input.value = '';
  render();
}

// RESET LocalStorage
const h1 = document.querySelector('h1');
h1.onclick = () => {
  const newList = ['One', 'Two', 'Three'];

  localStorage.setItem('habits', JSON.stringify(newList));

  render();
};
