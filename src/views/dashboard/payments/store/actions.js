import services from '@/http'
import * as types from './mutation-types'

export const ActionGetPaymentslist = ({ commit }) => (
  services.payments.paymentsList().then(res => {
    commit(types.SET_PAYMENTSLIST, res.data.data)
  })
)
