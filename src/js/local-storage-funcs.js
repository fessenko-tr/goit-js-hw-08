function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (eror) {
    console.log('whoops');
  }
}
function loadFromStorage(key) {
  try {
    const loadedItem = localStorage.getItem(key);
    return loadedItem === null ? undefined : JSON.parse(loadedItem);
  } catch (error) {}
}

function removeFromStorage(key) {
  localStorage.removeItem(key);
}

export { saveToStorage, loadFromStorage, removeFromStorage };
