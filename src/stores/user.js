import { ref } from 'vue'
import { defineStore } from 'pinia'
import { myLogin } from '@/api'
import { setToken, setUserInfo } from '@/utils/localStorage'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const token = ref('')
  function login(loginparams) {
    myLogin(loginparams).then((res) => {
      if (res.status === 200) {
        token.value = res.data.token
        userInfo.value = res.data.userInfo
        setToken(res.data.token)
        setUserInfo(res.data.userInfo)
      }
    })
  }

  return { userInfo, token, login }
})
