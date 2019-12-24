export default [
  {
    name: 'employees',
    path: '/employees',
    component: () => import(/* webpackChunkName: "employees" */ './Employees'),
    meta: {
      showNavbar: true,
      title: 'Funcionários',
      icon: 'mdi-account-group',
      label: 'Todos os funcionários'
    }
  }
]
