import services from '@/http'
import * as types from './mutation-types'

export const ActionGetFuelslist = ({ commit }) => (
  services.fuels.fuelsList().then(res => {
    commit(types.SET_FUELSLIST, res.data.data)
  })
)
