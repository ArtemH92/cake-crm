<script setup>
import { Layout, LayoutContent } from 'ant-design-vue'
</script>


<template>
  <Layout class="h-screen">
    <Layout>
      <LayoutContent>
        <RouterView />
      </LayoutContent>
    </Layout>
  </Layout>
</template>

