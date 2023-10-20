import React from 'react';
import  Home  from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
const App = () => {

const router=createBrowserRouter(
  [
    { path: '/', element: <Home/> },
    { path: '/cart', element: <Cart/> },
    { path: '/product/:id', element: <ProductPage/> },
    {path:'/products',element:<Products/>}
  ]
);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )

};

export default App;
