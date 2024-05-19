<script lang="ts" setup>
import { dataSource, columns } from '@/views/CustomerBase/List/configList'
import RouteButton from '@/components/RouteButton.vue'
import { Flex, Table, TypographyTitle } from 'ant-design-vue'
</script>


<template>
  <Flex class="w-full p-10 flex-col" align="center">
    <Flex class="justify-between items-center max-w-[75%] w-full mb-5">
      <TypographyTitle>Список клиентов</TypographyTitle>
      <RouteButton label="Создать пользователя" path="/customer_base/create" icon="person_add" />
    </Flex>
    <Table :dataSource="dataSource" class="w-[75%]" :columns="columns" />
  </Flex>
</template>
