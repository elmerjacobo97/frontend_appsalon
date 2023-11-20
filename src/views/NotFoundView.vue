<template>
  <div class="flex items-center justify-center h-screen bg-salon-dark">
    <div class="animate-fade-in-up text-center">
      <h1 class="text-9xl font-bold text-white">404</h1>
      <p class="text-6xl font-medium text-salon-accent mt-4">Oops!</p>
      <p class="text-xl text-gray-300 mt-6">
        La página que buscas parece haber sido movida, eliminada o no existe.
      </p>
      <RouterLink
        :to="{ name: 'home' }"
        class="inline-block mt-10 bg-salon-accent text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-salon-accent-dark hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Volver al Inicio
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
}
</style>
