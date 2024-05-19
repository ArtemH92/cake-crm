<script setup>
import { reactive } from 'vue'
import {
  message,
  Card,
  Form,
  FormItem,
  Input,
  InputPassword,
  Button,
  Typography
} from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const user = reactive({
  email: '',
  password: ''
})

const loginHandler = async (user) => {
  try {
    await authStore.auth({ email: user.email, password: user.password }, 'login')
    message.success('Вы успешно авторизовались')
    router.push('/')
  } catch (err) {
    message.error('Вы ввели неверные данные')
  }
}
</script>

<template>
  <Card title="Авторизация" class="min-w-[600px]">
    <Form
      :model="user"
      autocomplete="off"
      label-align="left"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
    >
      <FormItem label="Введите имя пользователя" name="email">
        <Input v-model:value="user.email" />
      </FormItem>
      <FormItem label="Введите пароль" name="password">
        <InputPassword v-model:value="user.password" />
      </FormItem>
      <FormItem class="flex justify-center">
        <Button type="primary" @click="loginHandler(user)">Войти</Button>
      </FormItem>
    </Form>
    <Typography class="text-center"
      >У Вас нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></Typography
    >
  </Card>
</template>
