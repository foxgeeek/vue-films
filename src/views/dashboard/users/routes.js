export default [
  {
    name: 'users',
    path: '/users',
    component: () => import(/* webpackChunkName: "users" */ './Users'),
    meta: {
      showNavbar: true,
      title: 'Usuários',
      icon: 'mdi-account',
      label: 'Todos os usuários'
    }
  }
]
