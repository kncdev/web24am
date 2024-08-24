<template>
  <div>
    <div class="lg:p-0 p-[0_1.5rem]">
      <NuxtPage />
    </div>
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