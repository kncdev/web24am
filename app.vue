<template>
  <div>
    <NuxtPage />
    <CustomCursor />
  </div>
</template>

<script setup>

import { useHead } from '#imports'
import CustomCursor from '~/components/CustomCursor.vue'

useHead({
  title: '24AM'
})

</script>