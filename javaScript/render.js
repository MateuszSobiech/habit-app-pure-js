import Storage from './Storage.js';
import { getHabitHTML } from './getHabitHTML.js';
import { setEventToCheckList } from './setCheckList.js';

export const renderTasks = () => {
    const habitsHTML = document.querySelector('.habits');
    const habitList = Storage.getHabits();
    const checkList = Storage.getChecked();

    if (!habitList) return;

    habitsHTML.innerHTML = habitList.map((habit, index) => getHabitHTML(habit, checkList[index])).join('');

    setEventToCheckList();
};
