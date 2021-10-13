import { getLocalStorage } from './getLocalStorage.js';

const habitsDiv = document.querySelector('.habits');

habitsDiv.onclick = (e) => {
  const element = e.target;

  if (element.classList[0] === 'btn-close') {
    const singleHabit = element.parentElement.parentElement;
    const habitId = element.parentElement.children[0].children[0].id;

    const array = getLocalStorage();

    const newList = array.filter((v) => v !== habitId);

    localStorage.setItem('habits', JSON.stringify(newList));
    singleHabit.remove();
  }
};
