import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetUser', JSON.stringify(res.data.data.user))
    dispatch('ActionSetToken', res.data.data.token)
  })
}

export const ActionLogout = ({ dispatch }) => {
  return services.auth.logout().then(() => {
    storage.setHeaderToken('')
    dispatch('ActionSignOut')
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch('ActionSetUser', storage.getLocalUser())
      resolve()
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  storage.setLocalUser(payload)
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
  storage.setHeaderToken('')
  storage.deleteLocalUser()
  storage.deleteLocalToken()
}
