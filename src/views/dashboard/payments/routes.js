export default [
  {
    name: 'payments',
    path: '/payments',
    component: () => import(/* webpackChunkName: "payments" */ './Payments'),
    meta: {
      showNavbar: true,
      title: 'Métodos de pagamentos',
      icon: 'mdi-credit-card-outline',
      label: 'Todos os métodos de pagamentos'
    }
  }
]
