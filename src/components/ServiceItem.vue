<script setup>
import { formatCurrency } from '@/helpers'
import { useAppointmentsStore } from '@/stores/appointments'

defineProps({
  service: {
    type: Object
  }
})

const appointments = useAppointmentsStore()
</script>

<template>
  <div
    class="p-5 space-y-5 bg-salon-dark shadow-xl rounded-xl hover:bg-slate-700 transition ease-in cursor-pointer"
    :class="appointments.isServiceSelected(service._id) && 'bg-slate-700'"
    @click="appointments.onServiceSelected(service)"
  >
    <p class="text-salon-gold text-lg font-light">{{ service.name }}</p>
    <p class="text-salon-rose text-2xl font-black">{{ formatCurrency(service.price) }}</p>
  </div>
</template>
