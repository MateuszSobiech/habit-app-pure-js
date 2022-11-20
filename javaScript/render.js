import { HabitComponent } from './habit.comp.js';
import Storage from './Storage.js';
import { setEventToCheckList } from './setCheckList.js';

export const renderTasks = () => {
    const habitsHTML = document.querySelector('.habits');
    const habitNames = Storage.getHabits();
    const checkList = Storage.getChecked();

    if (!habitNames) return;

    habitsHTML.innerHTML = '';

    habitNames.forEach((habitName, index) => {
        const habit = new HabitComponent(habitName, checkList[index]);
        habitsHTML.append(habit);
    });

    setEventToCheckList();
};
