<script setup>
import { useRoute, useRouter } from 'vue-router'
import { inject, onMounted } from 'vue'
import AuthAPI from '@/api/AuthAPI'

const toast = inject('toast')
const route = useRoute()
const router = useRouter()
const { token } = route.params

onMounted(async () => {
  try {
    const { data } = await AuthAPI.verifyAccount(token)
    toast.open({
      message: data.msg || 'Cuenta confirmada exitosamente',
      type: 'success'
    })
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 3000)
  } catch (error) {
    console.log('Error', error)
    toast.open({
      message: error.response.data.msg || 'Error al confirmar tu cuenta. Inténtalo de nuevo',
      type: 'error'
    })
  }
})
</script>

<template>
  <h2 class="text-4xl font-extrabold text-gray-300 text-center">Verificar Cuenta</h2>
</template>
