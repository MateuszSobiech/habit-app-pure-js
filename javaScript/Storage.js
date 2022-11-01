export default class Storage {
    /**
     *
     * @param {string} name
     * @param {any} data
     */
    static setData(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    static getHabits() {
        const habits = localStorage.getItem('habits');
        const array = JSON.parse(habits);

        return array || [];
    }

    static getChecked() {
        const checkList = localStorage.getItem('checkList');
        const array = JSON.parse(checkList);

        return array || [];
    }

    static getDate() {
        const currentDay = localStorage.getItem('currentDay');
        const day = JSON.parse(currentDay);

        return day || 0;
    }
}
