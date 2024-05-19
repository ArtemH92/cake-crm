import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: ''
  })
  const error = ref('')
  const loader = ref(false)

  const auth = async (payload, type) => {
    const stringUrl = type === 'register' ? 'signUp' : 'signInWithPassword'
    error.value = ''
    loader.value = true
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true
        }
      )
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken
      }
      localStorage.setItem(
        'userTokens',
        JSON.stringify({
          token: userInfo.value.token,
          refreshToken: userInfo.value.refreshToken
        })
      )
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email exists'
          break
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Operation not allowed'
          break
        case 'EMAIL_NOT_FOUND':
          error.value = 'Email not found'
          break
        case 'INVALID_PASSWORD':
          error.value = 'Invalid password'
          break
        default:
          error.value = 'Error'
          break
      }
      throw error.value
    } finally {
      loader.value = false
    }
    console.log(error.value)
  }

  const logout = () => {
    userInfo.value = {
      token: '',
      email: '',
      userId: '',
      refreshToken: ''
    }
  }

  return { auth, userInfo, error, loader, logout }
})

// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// import axios from 'axios'

// export const useAuthStore = defineStore('auth', () => {
//   const auth = async (payload) => {
//     try {
//       const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`)
//     } catch(err) {
//       console.log(err)
//     }
//   }
//   return {}
// })
