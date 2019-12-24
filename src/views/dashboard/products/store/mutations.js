import * as types from './mutation-types'

export default {
  [types.SET_PRODUCTSLIST] (state, payload) {
    state.productsList = payload
  }
}
