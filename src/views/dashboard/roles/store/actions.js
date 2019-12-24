import services from '@/http'
import * as types from './mutation-types'

export const ActionGetRoleslist = ({ commit }) => (
  services.roles.rolesList().then(res => {
    commit(types.SET_ROLESLIST, res.data.data)
  })
)
