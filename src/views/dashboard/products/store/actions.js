import services from '@/http'
import * as types from './mutation-types'

export const ActionGetProductslist = ({ commit }) => (
  services.products.productsList().then(res => {
    commit(types.SET_PRODUCTSLIST, res.data.data)
  })
)
