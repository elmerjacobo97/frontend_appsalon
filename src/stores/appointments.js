import { defineStore } from 'pinia'
import { computed, inject, onMounted, ref, watch } from 'vue'
import Swal from 'sweetalert2'
import AppointmentAPI from '@/api/AppointmentAPI'
import { convertToISO } from '@/helpers/date'
import { useRouter } from 'vue-router'

export const useAppointmentsStore = defineStore('appointments', () => {
  const toast = inject('toast')
  const router = useRouter()

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

  watch(date, () => {
    // Obtener las citas
    try {
      const { data } = AppointmentAPI.getByDate(date.value)
      services.value = data
    } catch (error) {
      console.log('error', error)
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
    return services.value?.length === 0
  })

  const totalAmount = computed(() => {
    return services.value?.reduce((acc, service) => {
      return acc + service.price
    }, 0)
  })

  const createAppoint = async () => {
    const appointment = {
      services: services.value.map((s) => s._id),
      date: convertToISO(date.value),
      time: time.value,
      totalAmount: totalAmount.value
    }

    try {
      const {
        data: { msg }
      } = await AppointmentAPI.create(appointment)
      toast.open({
        message: msg,
        type: 'success'
      })

      clearAppointmentData()
      await router.push({ name: 'my-appointments' })
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  const clearAppointmentData = () => {
    services.value = []
    date.value = ''
    time.value = ''
  }
  const isValidReservation = computed(() => {
    return services.value?.length && date.value?.length && time.value?.length
  })

  const isDateSelected = computed(() => {
    return !!date.value // true or false
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
    createAppoint,
    isDateSelected
  }
})
