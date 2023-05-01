import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailPage from "./pages/user/UserCartDetailPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-detail" element={<ProductDetailsPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element="Page not exist 404" />


        {/* Routes that Require Login */}
        <Route element={<ProtectedRoutesComponent />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/orders" element={<UserOrderPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailPage />} />
        </Route>


      </Routes>


    </BrowserRouter>
  );
}

export default App;
