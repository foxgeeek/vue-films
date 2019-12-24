export default [
  {
    name: 'fuels',
    path: '/fuels',
    component: () => import(/* webpackChunkName: "fuels" */ './Fuels'),
    meta: {
      showNavbar: true,
      title: 'Bombas de combustíveis',
      icon: 'mdi-gas-station',
      label: 'Todos as bombas de combustíveis'
    }
  }
]
