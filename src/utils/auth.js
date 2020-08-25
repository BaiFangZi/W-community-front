import Cookies from 'js-cookie'

const TokenKey = 'role'


export function getToken() {
  // console.log(Cookies.get('role'))
  return Cookies.get(TokenKey)

}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}