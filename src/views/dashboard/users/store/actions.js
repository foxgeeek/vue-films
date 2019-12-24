import services from '@/http'
import * as types from './mutation-types'

export const ActionGetUserslist = ({ commit }) => (
  services.users.usersList().then(res => {
    commit(types.SET_USERSLIST, res.data.data)
  })
)
