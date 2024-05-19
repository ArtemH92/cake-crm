<script setup>
import { Flex, Card, Form, FormItem, Input, Button, Space, Textarea, Select, SelectOption } from 'ant-design-vue'
import { DiscountOptions } from '@/models/selectOptions'
import { InstagramOutlined } from '@ant-design/icons-vue'
import RouteButton from '@/components/RouteButton.vue'
import { h, reactive } from 'vue'
import { vMaska } from 'maska'

const ClientForm = reactive({
  name: '',
  phone: '',
  address: '',
  instagram: '',
  discount: '',
  events: '',
  notes: ''
})


const submitForm = () => {
  console.log(ClientForm)
}
</script>

<template>
  <Flex justify="center" class="w-full mt-[50px] flex-col items-center">
    <Space class="max-w-[1050px] w-full flex justify-end mr-[50px]">
      <RouteButton label="Вернуться к списку клиентов" path="/customer_base/list" />
    </Space>
    <Card class="max-w-[600px] w-full mt-[50px]" title="Добавить новоги клиента" bordered>
      <Form
        :model="ClientForm"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        label-align="left"
      >
        <FormItem label="Имя" name="name">
          <Input v-model:value="ClientForm.name" />
        </FormItem>
        <FormItem label="Номер телефона" name="phone">
          <Input v-model:value="ClientForm.phone" v-maska data-maska="+### (##) ### ## ##" />
        </FormItem>
        <FormItem label="Адрес доставки" name="address">
          <Input v-model:value="ClientForm.address" />
        </FormItem>
        <FormItem label="Instagram" name="instagram">
          <Input v-model:value="ClientForm.instagram" :suffix="h(InstagramOutlined)" />
        </FormItem>
        <FormItem label="Скидка" name="discount">
          <Select v-model:value="ClientForm.discount">
            <SelectOption v-for="option of DiscountOptions" :key="option" :value="option.value">
              {{ option.label }}
            </SelectOption>
          </Select>
        </FormItem>
        <FormItem label="События" name="events">
          <Input v-model:value="ClientForm.events" />
        </FormItem>
        <FormItem label="Примечания" name="notes">
          <Textarea v-model:value="ClientForm.notes" />
        </FormItem>
        <FormItem class="flex justify-center">
          <Button type="primary" @click="submitForm()">Создать</Button>
        </FormItem>
      </Form>
    </Card>
  </Flex>
</template>
