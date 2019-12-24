import * as types from './mutation-types'

export default {
  [types.SET_PAYMENTSLIST] (state, payload) {
    state.paymentsList = payload
  }
}
