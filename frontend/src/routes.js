import React from 'react';
import DefaultLayout from './hocs/DefaultLayout';

import Login from './views/login';

const Home = React.lazy(() => import('./views/home'));
const VideoView = React.lazy(() => import('./views/video'));

export const protectedRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
  },
  {
    path: '/video/:id/:code',
    exact: true,
    layout: DefaultLayout,
    component: () => <VideoView />,
  },
];

export const publicRoutes = [
  {
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    component: () => <Login />,
    strictlyPublic: true,
  },
];