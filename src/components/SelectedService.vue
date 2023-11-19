<script setup>
import { formatCurrency } from '@/helpers'
import { TrashIcon } from '@heroicons/vue/24/solid'
import { useAppointmentsStore } from '@/stores/appointments'

defineProps({
  service: {
    type: Object
  }
})

const appointments = useAppointmentsStore()
</script>

<template>
  <div class="flex items-center justify-between p-5 space-y-5 bg-salon-dark rounded-xl">
    <div>
      <p class="text-salon-gold text-lg font-light">{{ service.name }}</p>
      <p class="text-salon-rose text-2xl font-black">{{ formatCurrency(service.price) }}</p>
    </div>
    <button class="btn btn-circle" @click="appointments.onServiceSelected(service)">
      <TrashIcon class="w-6 h-6 text-salon-accent" />
    </button>
  </div>
</template>
