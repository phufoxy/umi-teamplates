export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: './home',
      },
      {
        path: '/404',
        component: './404',
      },
      {
        component: './404',
      },
    ],
  },
];
