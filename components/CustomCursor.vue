<template>
  <div class="custom-cursor"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const handleMouseMove = (event) => {
  const cursor = document.querySelector('.custom-cursor')
  if (cursor) {
    cursor.style.left = `${event.clientX}px`
    cursor.style.top = `${event.clientY}px`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
@import '~/assets/css/cursor.css';
</style>