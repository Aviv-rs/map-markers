export const sessionService = {
  saveToStorage,
  loadFromStorage,
}

function saveToStorage(key, val) {
  sessionStorage.setItem(key, JSON.stringify(val))
}
function loadFromStorage(key) {
  let val = sessionStorage.getItem(key)
  return JSON.parse(val)
}
