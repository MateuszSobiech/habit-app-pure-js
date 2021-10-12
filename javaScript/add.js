import { getLocalStorage } from './getStorage.js';
import { render } from './render.js';

const btn = document.querySelector('.btn');

btn.onclick = () => {
  const habitList = getLocalStorage();
  const { value: newHabit } = document.querySelector('#input');

  const newList = [...habitList, newHabit];

  localStorage.setItem('habits', JSON.stringify(newList));

  render();
};

// RESET LocalStorage
const h1 = document.querySelector('h1');
h1.onclick = () => {
  const newList = ['One', 'Two', 'Three'];

  localStorage.setItem('habits', JSON.stringify(newList));

  render();
};
