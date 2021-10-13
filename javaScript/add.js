import { getLocalStorage } from './getLocalStorage.js';
import { render } from './render.js';
import { setEventToCheckList } from './setCheckList.js';

const btn = document.querySelector('.btn');

btn.onclick = () => {
  const input = document.querySelector('#input');

  const { value: newHabit } = input;

  newHabit && add(newHabit);
};

function add(newHabit) {
  const habitList = getLocalStorage();

  if (habitList && habitList.includes(newHabit)) {
    alert('Habit exists');
    input.value = '';
    return;
  }

  const newList = habitList ? [...habitList, newHabit] : [newHabit];

  localStorage.setItem('habits', JSON.stringify(newList));

  input.value = '';
  render();
  setEventToCheckList();
}

// RESET LocalStorage
const h1 = document.querySelector('h1');
h1.onclick = () => {
  const newList = ['One', 'Two', 'Three'];

  localStorage.setItem('habits', JSON.stringify(newList));
  localStorage.setItem('checkList', JSON.stringify(''));

  render();
  setEventToCheckList();
};
