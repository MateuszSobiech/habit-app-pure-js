import { habitComponent } from './habitComponent.js';
import { getLocalStorage } from './getStorage.js';

const habitsHTML = document.querySelector('.habits');

export function render() {
  const habitList = getLocalStorage();
  habitsHTML.innerHTML = '';

  habitList.forEach((habit) => {
    const habitElement = habitComponent(habit);

    habitsHTML.innerHTML += habitElement;
  });
}
