import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const SignUp = React.lazy(() => import('./pages/SignUp'));
const Shop = React.lazy(() => import('./pages/Shop'));

const NavRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Shop" element={<Shop />}></Route>
    </Routes>
  </Suspense>
);

export default NavRoutes;
