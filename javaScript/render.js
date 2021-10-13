import { habitComponent } from './habitComponent.js';
import { getLocalStorage } from './getLocalStorage.js';

const habitsHTML = document.querySelector('.habits');

export function render() {
  const habitList = getLocalStorage();

  if (!habitList) {
    return;
  }

  habitsHTML.innerHTML = '';

  habitList.forEach((habit) => {
    const habitElement = habitComponent(habit);

    habitsHTML.innerHTML += habitElement;
  });
}
