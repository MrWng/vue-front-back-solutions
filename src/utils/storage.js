export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  return localStorage.setItem(key, value)
}

export const clearStorage = (key, value) => {
  return localStorage.clear()
}

export const removeItem = (key) => {
  return localStorage.removeItem(key)
}
