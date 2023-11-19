<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="md:flex h-screen">
    <div class="h-64 md:h-auto bg-cover bg-center md:w-1/3 bg-hero"></div>
    <div class="md:w-2/3 min-h-full mx-5 overflow-y-scroll">
      <RouterView />
    </div>
  </div>
</template>
