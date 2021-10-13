import { getHabitList } from './getLocalStorage.js';
import { render } from './render.js';

const btn = document.querySelector('.btn');
const input = document.querySelector('#input');

btn.onclick = () => addNew();

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addNew();
  }
});

function addNew() {
  const { value: newHabit } = input;

  newHabit && add(newHabit);
}

function add(newHabit) {
  const habitList = getHabitList();

  if (habitList && habitList.includes(newHabit)) {
    alert('Habit exists');
    return;
  }

  const newList = habitList ? [...habitList, newHabit] : [newHabit];

  localStorage.setItem('habits', JSON.stringify(newList));

  input.value = '';
  render();
}

// RESET LocalStorage
const start = document.querySelector('.start');
start.onclick = () => {
  const newList = ['One', 'Two', 'Three'];

  localStorage.setItem('habits', JSON.stringify(newList));
  localStorage.setItem('checkList', JSON.stringify(''));

  render();
};
