import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'userInfo',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})

    const role = ref('')
    return {
      token,
      user,
      setToken,
      removeToken,
      role
    }
  },
  {
    persist: {
      paths: ['token']
    }
  }
)
