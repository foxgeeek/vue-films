export default [
  {
    name: 'clients',
    path: '/clients',
    component: () => import(/* webpackChunkName: "clients" */ './Clients'),
    meta: {
      showNavbar: true,
      title: 'Clientes',
      icon: 'mdi-account-multiple',
      label: 'Todos os clientes'
    }
  }
]
