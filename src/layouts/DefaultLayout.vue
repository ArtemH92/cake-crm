<script setup>
import { ref } from 'vue'
import { Layout, LayoutContent } from 'ant-design-vue'
import ANavbar from '@/components/Navbar/ANavbar.vue'
import ASidebar from '@/components/Sidebar/ASidebar.vue'
import AFooter from '@/components/Footer/AFooter.vue'

let toggleSidebar = ref(true)
</script>

<template>
  <Layout class="h-screen">
    <ASidebar :collapsed="toggleSidebar" />
    <Layout>
      <ANavbar @toggle="(value) => (toggleSidebar = value)" />
      <LayoutContent>
        <RouterView />
      </LayoutContent>
      <AFooter />
    </Layout>
  </Layout>
</template>
