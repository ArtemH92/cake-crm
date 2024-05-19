<script setup>
import { reactive } from 'vue'
import { message, Card, Form, FormItem, Input, InputPassword, Button, Typography } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const user = reactive({
  username: '',
  password: ''
})

const router = useRouter()
const loginHandler = (user) => {
  if(user.username === 'artem' && user.password === '123') {
    message.success('Вы успешно авторизовались')
    router.push('/')
  } else {
    message.error('Данные введены не верно')
  }
}

</script>

<template>
  <Card title="Авторизация" class="min-w-[600px]">
    <Form :model="user" autocomplete="off" label-align="left" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <FormItem label="Введите имя пользователя" name="username">
        <Input v-model:value="user.username" />
      </FormItem>
      <FormItem label="Введите пароль" name="password">
        <InputPassword v-model:value="user.password" />
      </FormItem>
      <FormItem class="flex justify-center">
        <Button type="primary" @click="loginHandler(user)">Войти</Button>
      </FormItem>
    </Form>
    <Typography class="text-center">У Вас нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></Typography>
  </Card>
</template>
