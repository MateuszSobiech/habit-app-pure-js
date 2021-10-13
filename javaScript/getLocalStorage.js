export function getHabitList() {
  const habits = localStorage.getItem('habits');
  const array = JSON.parse(habits);

  return array || [];
}

export function getCheckList() {
  const habits = localStorage.getItem('checkList');
  const array = JSON.parse(habits);

  return array || [];
}
