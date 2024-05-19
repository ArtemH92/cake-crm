import { h } from 'vue'
import { HomeOutlined, ProfileOutlined, UsergroupAddOutlined } from '@ant-design/icons-vue'
import { RouterLink } from 'vue-router'

const labelSidebar = (url, label) => h(RouterLink, { to: url }, () => label)

export const SidebarConfig = [
  {
    key: '/home/list',
    icon: () => h(HomeOutlined),
    label: labelSidebar('/home/list', 'Главная'),
    title: 'homepage'
  },
  {
    key: '/customer_base/list',
    icon: () => h(UsergroupAddOutlined),
    label: labelSidebar('/customer_base/list', 'База клиентов'),
    title: 'clientsBase'
  },
  {
    key: '/recipes',
    icon: () => h(ProfileOutlined),
    label: labelSidebar('/recipes', 'Рецепты'),
    title: 'receipts'
  }
]
