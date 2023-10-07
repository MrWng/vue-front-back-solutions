/**
 * 判断是否是空对象
 */

export const isEmpty = (data) => {
  let stringObj
  switch (typeof data) {
    case 'string':
      return !data
    case 'object':
      stringObj = JSON.stringify(data)
      return stringObj === '[]' || stringObj === '{}'
    default:
      return false
  }
}

export const isNotEmpty = (data) => {
  return !isEmpty(data)
}
