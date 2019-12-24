import { setBearerToken } from '@/http'

export const setHeaderToken = token => setBearerToken(token)

// Local Token
export const setLocalToken = token => localStorage.setItem('token', token)
export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')

// Local User
export const setLocalUser = user => localStorage.setItem('user', user)
export const getLocalUser = () => localStorage.getItem('user')
export const deleteLocalUser = () => localStorage.removeItem('user')
