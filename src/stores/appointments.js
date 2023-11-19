import { defineStore } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import Swal from 'sweetalert2'

export const useAppointmentsStore = defineStore('appointments', () => {
  const services = ref([])
  const date = ref('')
  const hours = ref([])
  const time = ref('')

  onMounted(() => {
    const startHour = 10
    const endHour = 19

    for (let i = startHour; i <= endHour; i++) {
      hours.value.push(i + ':00')
    }
  })

  const onServiceSelected = (service) => {
    if (services.value.some((s) => s._id === service._id)) {
      services.value = services.value.filter((s) => s._id !== service._id)
      return
    }

    if (services.value.length === 3) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Máximo 3 servicios por cita. Elimine uno antes de agregar otro.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3A506B'
      })
      return
    }

    services.value.push(service)
  }

  const isServiceSelected = computed(() => {
    return (id) => {
      return services.value.some((s) => s._id === id)
    }
  })

  const noServicesSelected = computed(() => {
    return services.value.length === 0
  })

  const totalAmount = computed(() => {
    return services.value.reduce((acc, service) => {
      return acc + service.price
    }, 0)
  })

  const createAppoint = () => {
    const appointment = {
      services: services.value.map((s) => s._id),
      date: date.value,
      time: time.value,
      totalAmount: totalAmount.value
    }
    console.log('appointment', appointment)
  }

  const isValidReservation = computed(() => {
    return services.value.length && date.value.length && time.value.length
  })

  return {
    services,
    date,
    hours,
    time,
    onServiceSelected,
    isServiceSelected,
    totalAmount,
    noServicesSelected,
    isValidReservation,
    createAppoint
  }
})
