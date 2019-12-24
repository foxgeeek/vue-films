import * as types from './mutation-types'

export default {
  [types.SET_ROLESLIST] (state, payload) {
    state.rolesList = payload
  }
}
