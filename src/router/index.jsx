import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartLayout, MainLayout, ProfileLayout } from "../layouts";

import {
  Cart,
  CartInfo,
  Home,
  Login,
  Products,
  ProductsDetails,
  Profile,
  Register,
  ResetPassword,
} from "../pages";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsdetails" element={<ProductsDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* Layout del profile */}
        <Route element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Layout sin header/footer */}
        <Route element={<CartLayout />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/info" element={<CartInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
