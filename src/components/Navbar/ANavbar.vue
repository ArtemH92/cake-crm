<script lang="ts" setup>
import { ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import DropDownMenu from './DropDownMenu.vue'
import { LayoutHeader, TypographyText, Button } from 'ant-design-vue'

const emit = defineEmits(['toggle'])
let toggleSidebar = ref(true)
const toggle = () => {
  toggleSidebar.value = !toggleSidebar.value
  return emit('toggle', toggleSidebar.value)
}

let currentTime = ref(dayjs().format('DD MM YYYY HH:mm:ss'))
let intervalId

intervalId = setInterval(() => {
  currentTime.value = dayjs().format('DD MM YYYY HH:mm:ss')
}, 1000)

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <LayoutHeader class="flex justify-between items-center">
    <Button type="text" @click="() => toggle()" class="flex justify-center items-center">
      <template #icon>
        <span class="material-icons-outlined text-amber-50">
          {{ toggleSidebar ? 'menu' : 'close' }}
        </span>
      </template>
    </Button>
    <TypographyText class="text-amber-50">
      {{ currentTime }}
    </TypographyText>
    <TypographyText>
      <DropDownMenu />
    </TypographyText>
  </LayoutHeader>
</template>
