<script setup>
import { useServicesStore } from '@/stores/services'
import ServiceItem from '@/components/ServiceItem.vue'

const services = useServicesStore()
</script>

<template>
  <h2 class="text-4xl font-extrabold text-gray-300">Servicios</h2>
  <p class="text-gray-300">A continuación elige al menos un servicio para tu cita.</p>
  <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
    <ServiceItem v-for="service in services.services" :key="service._id" :service="service" />
  </div>
</template>
