import * as types from './mutation-types'

export default {
  [types.SET_CLIENTSLIST] (state, payload) {
    state.clientsList = payload
  }
}
