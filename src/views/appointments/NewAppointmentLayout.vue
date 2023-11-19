<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="my-5 flex gap-3">
    <RouterLink
      :to="{ name: 'new-appointment' }"
      class="flex-1 btn btn-sm bg-salon-dark hover:bg-salon-gold"
      :class="route.name === 'new-appointment' && 'bg-salon-gold'"
      >Servicios</RouterLink
    >
    <RouterLink
      :to="{ name: 'appointment-details' }"
      class="flex-1 btn btn-sm bg-salon-dark hover:bg-salon-gold"
      :class="route.name === 'appointment-details' && 'bg-salon-gold'"
      >Citas y Resumen</RouterLink
    >
  </nav>
  <main>
    <RouterView />
  </main>
</template>
