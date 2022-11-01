import Storage from './Storage.js';
import { saveCheckedToLocalStorage } from './setCheckList.js';

const handleRemove = ({ target: element }) => {
    if (element.classList.contains('btn-close')) {
        const singleHabit = element.closest('.form-switch');
        const habitId = singleHabit.querySelector('input').id;
        const habits = Storage.getHabits();

        const newList = habits.filter((name) => name !== habitId);

        Storage.setData('habits', newList);

        singleHabit.remove();
        saveCheckedToLocalStorage();
    }
};

export const setRemoveEvent = () => {
    const habitsDiv = document.querySelector('.habits');
    habitsDiv.addEventListener('click', handleRemove);
};
