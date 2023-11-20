<script setup>
import AuthAPI from '@/api/AuthAPI'
import { inject } from 'vue'
import { reset } from '@formkit/vue'

const toast = inject('toast')

const handleSubmit = async ({ password_confirm, ...formData }) => {
  try {
    const { data } = await AuthAPI.register(formData)
    toast.open({
      message: data.msg || 'Cuenta creada exitosamente',
      type: 'success'
    })

    // Reset form
    reset('register-form')
  } catch (error) {
    console.log('Error', error)
    toast.open({
      message: error.response.data.msg || 'Error al registrar',
      type: 'error'
    })
  }
}
</script>

<template>
  <h2 class="text-4xl font-extrabold text-gray-300 text-center">Crea una cuenta</h2>
  <p class="text-gray-300 text-center">Crea una cuenta en AppSalon</p>

  <div class="p-5">
    <FormKit
      id="register-form"
      type="form"
      :actions="false"
      incomplete-message="Revisa todos los campos"
      @submit="handleSubmit"
    >
      <FormKit
        type="text"
        name="name"
        label="Nombre"
        validation="required|length:3"
        :validation-messages="{
          required: 'Este campo es requerido',
          length: 'El campo debe tener al menos 3 caracteres'
        }"
        placeholder="Ingresa tu nombre"
      />
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
        validation="required|length:6"
        :validation-messages="{
          required: 'Este campo es requerido',
          length: 'La contraseña debe tener al menos 6 caracteres'
        }"
        placeholder="Ingresa tu contraseña"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirma tu contraseña"
        validation="required|confirm"
        :validation-messages="{
          required: 'Este campo es requerido',
          confirm: 'Las contraseñas no coinciden'
        }"
        placeholder="Confirma tu contraseña"
      />
      <FormKit type="submit"> Registrarme </FormKit>
    </FormKit>
  </div>
</template>
