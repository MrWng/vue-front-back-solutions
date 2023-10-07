import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
export const getTimeStamp = () => getItem(TIME_STAMP)
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}
export const isCheckTimeout = () => {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
