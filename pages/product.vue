<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-5xl font-bold mb-8">Our Products</h1>
    <p class="text-lg mb-4">Here you can find information about our products.</p>
    <img :src="product1" alt="Product" class="w-1/2 h-auto rounded shadow-md" />
  </div>
</template>

<script setup>
import product1 from '~/assets/images/product-image.png'
</script>
