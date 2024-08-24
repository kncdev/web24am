<template>
  <div :style="{ backgroundColor: bgColor }" class="nav-sticky">
    <Navbar />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import { defineProps } from 'vue'

const props = defineProps({
  bgColor: {
    type: String,
    default: 'transparent'
  }
})
</script>

<style scoped>
.nav-sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>