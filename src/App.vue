<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NotAuthLayout from '@/layouts/NotAuthLayout.vue'

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout}-layout`
    }
  },
  components: {
    DefaultLayout,
    NotAuthLayout
  }
}
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
