import services from '@/http'
import * as types from './mutation-types'

export const ActionGetEmployeeslist = ({ commit }) => (
  services.employees.employeesList().then(res => {
    commit(types.SET_EMPLOYEESLIST, res.data.data)
  })
)
