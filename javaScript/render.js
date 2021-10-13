import { habitComponent } from './habitComponent.js';
import { getLocalStorage } from './getLocalStorage.js';

const habitsHTML = document.querySelector('.habits');

export function render() {
  const habitList = getLocalStorage();
  const checkList = JSON.parse(localStorage.getItem('checkList'));

  if (!habitList) {
    return;
  }

  habitsHTML.innerHTML = '';

  habitList.forEach((habit, index) => {
    const habitElement = habitComponent(habit, checkList[index]);

    habitsHTML.innerHTML += habitElement;
  });
}
