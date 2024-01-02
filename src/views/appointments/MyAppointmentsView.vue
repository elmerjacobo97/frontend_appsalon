<script setup>

import { useUserStore } from '@/stores/user';

const user = useUserStore()

</script>

<template>
  <h2 class="text-4xl font-extrabold text-gray-300 text-center">Mis Citas</h2>
  <p class="text-gray-300 text-center">A continuación podrás administrar tus citas.</p>
</template>
