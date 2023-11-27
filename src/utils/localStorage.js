import { TOKEN, USER_INFO } from './static'

export const getToken = () => {
  return window.localStorage.getItem(TOKEN) || ''
}

export const setToken = (token) => {
  return window.localStorage.setItem(TOKEN, token)
}

export const removeToken = () => {
  return window.localStorage.removeItem(TOKEN)
}
export const setUserInfo = (userInfo) => {
  return window.localStorage.setItem(USER_INFO, JSON.stringify(userInfo))
}
