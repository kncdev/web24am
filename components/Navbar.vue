<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img :src="logo" alt="Logo" class="h-10 w-auto" />
          <div class="hidden md:flex ml-10 space-x-4">
            <NuxtLink to="/" class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</NuxtLink>
            <NuxtLink to="/about" class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</NuxtLink>
            <NuxtLink to="/product" class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Product</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>

<script setup>
import logo from '~/assets/images/logo.png'
</script>
