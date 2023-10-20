import React from 'react';
import  Home  from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const App = () => {

const router=createBrowserRouter(
  [
    { path: '/', element: <Home/> },
    { path: '/cart', element: <Cart/> },
    { path: '/product/:id', element: <ProductPage/> },
  ]
);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )

};

export default App;
