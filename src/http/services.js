import { services as auth } from '@/modules/auth'
import { services as clients } from '@/views/dashboard/clients'
import { services as employees } from '@/views/dashboard/employees'
import { services as fuels } from '@/views/dashboard/fuels'
import { services as payments } from '@/views/dashboard/payments'
import { services as products } from '@/views/dashboard/products'
import { services as roles } from '@/views/dashboard/roles'
import { services as users } from '@/views/dashboard/users'

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
