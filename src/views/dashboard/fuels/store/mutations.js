import * as types from './mutation-types'

export default {
  [types.SET_FUELSLIST] (state, payload) {
    state.fuelsList = payload
  }
}
