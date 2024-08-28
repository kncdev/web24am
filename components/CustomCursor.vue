<template>
  <div class="custom-cursor"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const handleMouseMove = (event) => {
  const cursor = document.querySelector('.custom-cursor')
  if (cursor) {
    const cursorWidth = cursor.offsetWidth / 2;
    const cursorHeight = cursor.offsetHeight / 2;

    cursor.style.left = `${event.clientX - cursorWidth}px`
    cursor.style.top = `${event.clientY - cursorHeight}px`
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
