import { defineStore } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import AuthAPI from '@/api/AuthAPI'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const user = ref({})

  onMounted(async () => {
    try {
      const { data } = await AuthAPI.auth()
      user.value = data
    } catch (error) {
      console.log('error', error)
    }
  })

  const getUserName = computed(() => {
    return user.value?.name ? user.value.name : ''
  })

  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN')
    user.value = {}
    router.push({ name: 'login' })
  }

  return {
    user,
    getUserName,
    logout
  }
})
