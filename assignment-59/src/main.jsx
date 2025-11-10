import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from './components/Products.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import CartPage from './components/CartPage.jsx';
import { CartProvider } from './context/CartContext.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/:id",
        element: <ProductDetail />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
