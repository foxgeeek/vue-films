export default [
  {
    name: 'products',
    path: '/products',
    component: () => import(/* webpackChunkName: "products" */ './Products'),
    meta: {
      showNavbar: true,
      title: 'Produtos',
      icon: 'mdi-basket',
      label: 'Todos os produtos'
    }
  }
]
