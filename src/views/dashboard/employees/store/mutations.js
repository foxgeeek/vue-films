import * as types from './mutation-types'

export default {
  [types.SET_EMPLOYEESLIST] (state, payload) {
    state.employeesList = payload
  }
}
