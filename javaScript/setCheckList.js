import Storage from './Storage.js';

export const setEventToCheckList = () => {
    const checkDiv = document.querySelectorAll('.is-checked');
    checkDiv.forEach((element) => element.addEventListener('click', saveCheckedToLocalStorage));
};

export const saveCheckedToLocalStorage = () => {
    const checkDiv = document.querySelectorAll('.is-checked');
    const checkedList = [];
    checkDiv.forEach((el) => checkedList.push(el.children[0].checked));

    Storage.setData('checkList', checkedList);
};
