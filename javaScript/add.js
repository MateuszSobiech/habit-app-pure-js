import Storage from './Storage.js';
import { renderTasks } from './render.js';

const addNew = () => {
    const { value: newHabit } = input;

    if (newHabit) add(newHabit);
};

const add = (newHabit) => {
    const habitList = Storage.getHabits();

    if (habitList?.includes(newHabit)) {
        alert('Habit exists');
        return;
    }

    const newList = habitList ? [...habitList, newHabit] : [newHabit];

    Storage.setData('habits', newList);

    input.value = '';
    renderTasks();
};

export const setAddEvents = () => {
    const btn = document.querySelector('.btn');
    const input = document.querySelector('#input');

    btn.addEventListener('click', addNew);
    input.addEventListener('keyup', ({ keyCode }) => {
        if (keyCode === 13) addNew();
    });
};
