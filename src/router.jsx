import { Suspense, lazy } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const Layout = lazy(() => import('router/Layout'));
const Home = lazy(() => import('router/Home'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route
        path='*'
        element={
          <Suspense fallback={<>...</>}>
            <Navigate replace to='/' />
          </Suspense>
        }
      />
    </Route>,
  ),
);

export default router;
