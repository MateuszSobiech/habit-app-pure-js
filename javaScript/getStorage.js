export function getLocalStorage() {
  const habits = localStorage.getItem('habits');
  const array = JSON.parse(habits);

  return array;
}
