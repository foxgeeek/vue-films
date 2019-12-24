export default [
  {
    name: 'roles',
    path: '/roles',
    component: () => import(/* webpackChunkName: "roles" */ './Roles'),
    meta: {
      showNavbar: true,
      title: 'Cargos',
      icon: 'mdi-account-badge-horizontal',
      label: 'Todos os cargos'
    }
  }
]
