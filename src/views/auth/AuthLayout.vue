<script setup>
const authRoutes = [
  { name: 'login', text: 'Iniciar Sesión' },
  { name: 'register', text: 'Registrarse' }
]
</script>

<template>
  <div class="mx-auto lg:w-3/5 mt-5">
    <RouterView />
    <nav class="flex flex-col sm:flex-row sm:justify-between gap-5 mt-5">
      <RouterLink
        v-for="route in authRoutes"
        :key="route.name"
        :to="{ name: route.name }"
        class="btn btn-sm bg-salon-gold text-gray-50 hover:bg-salon-blue"
        >{{ route.text }}</RouterLink
      >
    </nav>
  </div>
</template>
