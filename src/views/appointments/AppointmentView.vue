<script setup>
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { useAppointmentsStore } from '@/stores/appointments'
import SelectedService from '@/components/SelectedService.vue'
import { formatCurrency } from '@/helpers'

const appointments = useAppointmentsStore()

const formatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMM'
})

const disabledDate = (date) => {
  const today = new Date()
  return date < today || date.getMonth() > today.getMonth() + 1 || [0, 6].includes(date.getDay())
}
</script>

<template>
  <h2 class="text-4xl font-extrabold text-gray-300">Detalles de la cita y resumen</h2>
  <p class="text-gray-300">A continuación verifica la información y confirma tu cita.</p>
  <h3 class="text-3xl font-extrabold text-gray-300 mt-5">Servicios</h3>

  <p v-if="appointments.noServicesSelected" class="text-gray-300 text-center">
    No hay servicios seleccionados.
  </p>

  <div v-else class="grid xl:grid-cols-2 gap-5 my-5">
    <SelectedService
      v-for="service in appointments.services"
      :key="service._id"
      :service="service"
    />
    <p class="text-gray-300 text-2xl font-bold text-right">
      Total a pagar:
      <span class="text-salon-accent font-extrabold ml-2">{{
        formatCurrency(appointments.totalAmount)
      }}</span>
    </p>
  </div>

  <div v-if="!appointments.noServicesSelected" class="py-5">
    <h3 class="text-3xl font-extrabold text-gray-300">Fecha y Hora</h3>
    <div class="lg:flex gap-5 items-center mt-5">
      <div class="w-full lg:w-96 flex justify-center rounded-xl">
        <VueTailwindDatepicker
          :disable-date="disabledDate"
          :formatter="formatter"
          v-model="appointments.date"
          i18n="es-mx"
          as-single
          no-input
        />
      </div>
      <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5 lg:mt-0">
        <button
          type="button"
          @click="appointments.time = hour"
          v-for="hour in appointments.hours"
          :key="hour"
          class="btn btn-lg rounded-xl hover:bg-salon-blue"
          :class="appointments.time === hour && 'bg-salon-blue'"
        >
          {{ hour }}
        </button>
      </div>
    </div>
    <div v-if="appointments.isValidReservation" class="my-10 flex justify-end">
      <button
        type="button"
        @click="appointments.createAppoint()"
        class="btn bg-salon-rose hover:bg-salon-accent uppercase"
      >
        Confirmar Reservación
      </button>
    </div>
  </div>
</template>
