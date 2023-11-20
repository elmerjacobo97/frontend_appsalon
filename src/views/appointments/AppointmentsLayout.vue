<script setup>
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<template>
  <div class="navbar flex flex-col lg:flex-row">
    <div class="flex-1">
      <RouterLink :to="{ name: 'home' }" class="text-3xl text-salon-gold">AppSalon</RouterLink>
    </div>
    <div class="flex flex-col items-center lg:items-end space-y-5 text-salon-accent">
      <nav class="flex gap-2 mt-5 lg:mt-0">
        <RouterLink
          :to="{ name: 'my-appointments' }"
          type="button"
          class="btn btn-sm bg-salon-gold text-gray-50 hover:bg-salon-blue"
        >
          Mis Citas
        </RouterLink>
        <RouterLink
          :to="{ name: 'new-appointment' }"
          class="btn btn-sm bg-salon-rose text-gray-50 hover:bg-salon-dark"
          >Nueva Cita</RouterLink
        >
        <button
          type="button"
          @click="user.logout"
          class="btn btn-sm bg-salon-blue text-gray-50 hover:bg-salon-gold"
        >
          <ArrowRightOnRectangleIcon class="w-6 h-6" />
          Cerrar Sesión
        </button>
      </nav>
      <p class="text-xl font-bold text-gray-300">Hola: {{ user.getUserName }}</p>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>
