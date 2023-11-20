<script setup>
import AuthAPI from '@/api/AuthAPI'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const toast = inject('toast')
const router = useRouter()

const handleLogin = async (formData) => {
  try {
    const {
      data: { token, msg }
    } = await AuthAPI.login(formData)

    // mostrar toast
    toast.open({
      message: msg || 'Inicio de sesión exitoso',
      type: 'success'
    })

    // Save token in localStorage
    localStorage.setItem('AUTH_TOKEN', token)

    // Redirect to mis citas
    setTimeout(() => {
      router.push({ name: 'my-appointments' })
    }, 1500)
  } catch (error) {
    console.log('Error', error)
    toast.open({
      message: error.response.data.msg || 'Error al iniciar sesión. Inténtalo de nuevo',
      type: 'error'
    })
  }
}
</script>

<template>
  <h2 class="text-4xl font-extrabold text-gray-300 text-center">Iniciar Sesión</h2>
  <p class="text-gray-300 text-center">Si tienes una cuenta, inicia sesión a continuación</p>

  <div class="p-5">
    <FormKit
      id="register-form"
      type="form"
      :actions="false"
      incomplete-message="Revisa todos los campos"
      @submit="handleLogin"
    >
      <FormKit
        type="email"
        name="email"
        label="Correo"
        validation="required|email"
        :validation-messages="{
          required: 'Este campo es requerido',
          email: 'El correo no es valido'
        }"
        placeholder="Ingresa tu correo"
      />
      <FormKit
        type="password"
        name="password"
        label="Contraseña"
        validation="required"
        :validation-messages="{
          required: 'Este campo es requerido'
        }"
        placeholder="Ingresa tu contraseña"
      />
      <FormKit type="submit"> Iniciar Sesión </FormKit>
    </FormKit>
  </div>
</template>
