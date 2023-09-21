import { Suspense } from 'react';
import { FullPageLoader } from '../components';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import { lazyImport } from '../lib';

const { NeuralNetworkGraph } = lazyImport(
  () => import('./home'),
  'NeuralNetworkGraph',
);

// eslint-disable-next-line react-refresh/only-export-components
const PublicRoutes = () => (
  <Layout>
    <Suspense fallback={<FullPageLoader />}>
      <Outlet />
    </Suspense>
  </Layout>
);

export const publicRoutes: RouteObject = {
  path: '/',
  element: <PublicRoutes />,
  children: [
    { path: '', element: <Navigate to="/visual" replace /> },
    { path: '/visual', element: <NeuralNetworkGraph /> },
    { path: '*', element: <NeuralNetworkGraph /> },
  ],
};
