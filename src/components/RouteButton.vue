<script lang="ts" setup>
defineProps({
  path: String,
  label: String,
  icon: String
})
</script>

<template>
  <RouterLink
    :to="path"
    class="flex justify-between items-center border-b p-2 border-b-black rounded-full hover:border-b-blue-400 transition-all duration-300 ease-in-out"
  >
    <span class="material-icons-outlined pr-2">
      {{ icon }}
    </span>
    <span>
      {{ label }}
    </span>
  </RouterLink>
</template>
