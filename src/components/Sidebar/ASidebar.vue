<script setup>
import { reactive, watchEffect } from 'vue'
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import { LayoutSider, TypographyTitle, Menu } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { SidebarConfig } from '@/components/Sidebar/sidebarConfig'

defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

const router = useRoute()

const state = reactive({
  selectedKeys: ['']
})

watchEffect(() => (state.selectedKeys = [router.path]))
</script>

<template>
  <LayoutSider :collapsed="collapsed" :trigger="null" collapsible>
    <TypographyTitle class="flex justify-center">
      <LogoIcon />
    </TypographyTitle>
    <Menu
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :items="SidebarConfig"
    />
  </LayoutSider>
</template>
