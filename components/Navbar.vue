<template>
  <nav class="flex justify-center items-center lg:p-[2.75rem_3.125rem] p-[1.5rem_0]">
    <a href="/">
      <img :src="logo" alt="Logo" class="h-auto w-[11.688rem]" />
    </a>
  </nav>
</template>

<style scoped>
/*nav {
  position: sticky;
  top: 0;
  z-index: 100;
}*/
</style>

<script setup>
import logo from '~/assets/images/logo.png'
</script>
