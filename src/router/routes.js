import { routes as dashboard } from '../views/dashboard'
import { routes as auth } from '../modules/auth'
import { routes as clients } from '../views/dashboard/clients'
import { routes as employees } from '../views/dashboard/employees'
import { routes as fuels } from '../views/dashboard/fuels'
import { routes as payments } from '../views/dashboard/payments'
import { routes as products } from '../views/dashboard/products'
import { routes as roles } from '../views/dashboard/roles'
import { routes as users } from '../views/dashboard/users'

export default [
  ...auth,
  ...dashboard,
  ...clients,
  ...employees,
  ...fuels,
  ...payments,
  ...products,
  ...roles,
  ...users
]
