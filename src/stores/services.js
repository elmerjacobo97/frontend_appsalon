import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import ServicesAPI from '@/api/ServicesAPI'

export const useServicesStore = defineStore('services', () => {
  const services = ref([])

  onMounted(async () => {
    try {
      const { data } = await ServicesAPI.all()
      services.value = data
    } catch (error) {
      console.log('error', error)
    }
  })

  return {
    services
  }
})
