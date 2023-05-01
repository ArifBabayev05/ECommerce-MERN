import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/product-detail" element={<ProductDetailsPage/>}/>
      <Route path="/products" element={<ProductListPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
