import { render } from './render.js';

const reset = document.querySelector('.reset');
const spinner = document.querySelector('.spinner');
const habits = document.querySelector('.habits');

reset.onclick = () => {
  habits.innerHTML = '';
  spinner.classList.remove('d-none');
  setTimeout(() => {
    spinner.classList.add('d-none');
    localStorage.setItem('checkList', JSON.stringify([]));
    render();
  }, 500);
};
