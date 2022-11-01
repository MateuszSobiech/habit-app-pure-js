import { renderTasks } from './render.js';
import Storage from './Storage.js';

export const setResetEvent = () => {
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', resetAll);
};

export const resetAll = () => {
    const spinner = document.querySelector('.spinner');
    const habits = document.querySelector('.habits');
    habits.innerHTML = '';
    spinner.classList.remove('d-none');
    setTimeout(() => {
        spinner.classList.add('d-none');
        Storage.setData('checkList', []);
        renderTasks();
    }, 200);
};
