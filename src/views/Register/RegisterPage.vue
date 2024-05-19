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

const authStore = useAuthStore()
const router = useRouter()

const user = reactive({
  username: '',
  password: '',
  comfirmPassword: ''
})

const loginHandler = async (user) => {
  try {
    await authStore.auth({ email: user.username, password: user.password }, 'register')
    message.success('Вы успешно зарегистрированы')
    router.push('/')
  } catch (err) {
    message.error('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.')
  }
}
</script>

<template>
  <Card title="Регистрация" class="min-w-[600px]">
    <Form
      :model="user"
      autocomplete="off"
      label-align="left"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
    >
      <FormItem label="Введите имя пользователя" name="username">
        <Input v-model:value="user.username" />
      </FormItem>
      <FormItem label="Введите пароль" name="password">
        <InputPassword v-model:value="user.password" />
      </FormItem>
      <!-- <FormItem label="Подтвердите пароль" name="comfirmPassword">
        <InputPassword v-model:value="user.comfirmPassword" />
      </FormItem> -->
      <FormItem class="flex justify-center">
        <Button type="primary" @click="() => loginHandler(user)">Зарегистрироваться</Button>
      </FormItem>
    </Form>
    <Typography class="text-center"
      >Вы зарегистрированы? <router-link to="/login">Войти</router-link></Typography
    >
  </Card>
</template>
