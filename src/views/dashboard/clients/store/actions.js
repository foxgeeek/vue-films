import services from '@/http'
import * as types from './mutation-types'

export const ActionGetClientslist = ({ commit }) => (
  services.clients.clientsList().then(res => {
    commit(types.SET_CLIENTSLIST, res.data.data)
  })
)
