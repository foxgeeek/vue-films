import { store as auth } from '@/modules/auth'
import { store as clients } from '@/views/dashboard/clients'
import { store as employees } from '@/views/dashboard/employees'
import { store as fuels } from '@/views/dashboard/fuels'
import { store as payments } from '@/views/dashboard/payments'
import { store as products } from '@/views/dashboard/products'
import { store as roles } from '@/views/dashboard/roles'
import { store as users } from '@/views/dashboard/users'

export default {
  auth,
  clients,
  employees,
  fuels,
  payments,
  products,
  roles,
  users
}
