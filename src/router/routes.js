
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/products',
        name: 'products',
        component: () => import('../pages/ProductsPage.vue')
      },
      {
        path: '/boxes',
        name: 'boxes',
        component: () => import('../pages/BoxesPage.vue')
      },
      {
        path: '/box/create',
        name: 'box/create',
        component: () => import('../pages/CreateBoxPage.vue')
      },
      {
        path: '/product/create',
        name: 'product/create',
        component: () => import('../pages/CreateProductPage.vue')
      },
      {
        path: '/packages',
        name: 'packages',
        component: () => import('../pages/PackagesPage.vue')
      },
      {
        path: '/packages/create',
        name: 'packages/create',
        component: () => import('../pages/CreatePackagePage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
