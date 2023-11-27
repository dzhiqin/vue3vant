import axios from '@/libs/api.request'

export const myLogin = ({ username, password }) => {
  const data = { username, password }
  return axios.request({
    url: 'sys/mLogin',
    data,
    method: 'post'
  })
}
