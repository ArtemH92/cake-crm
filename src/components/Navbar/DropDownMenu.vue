<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'
import { Dropdown, Button, Menu, MenuItem, MenuDivider } from 'ant-design-vue'
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
          <RouterLink to="/login">Выйти</RouterLink>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>
