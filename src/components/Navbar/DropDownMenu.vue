<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'
import { Dropdown, Button, Menu, MenuItem, MenuDivider } from 'ant-design-vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/login')
}
</script>

<template>
  <Dropdown :trigger="['click']">
    <Button
      type="primary"
      :icon="h(UserOutlined)"
      shape="circle"
      class="flex justify-center items-center"
    />
    <template #overlay>
      <Menu>
        <MenuItem key="0">
          <RouterLink to="/">Перейти к профилю</RouterLink>
        </MenuItem>
        <MenuDivider />
        <MenuItem key="1">
          <RouterLink to="/login" @click.prevent="logout">Выйти</RouterLink>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>
