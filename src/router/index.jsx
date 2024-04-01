import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartLayout, MainLayout, NoFooterLayout, ProfileLayout } from "../layouts";

import {
  Cart,
  CartInfo,
  CartMessage,
  CartMessageFail,
  CartPayment,
  CartShipping,
  EmailVerification,
  Home,
  Login,
  News,
  ProductDetails,
  Products,
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
          <Route path="/products/:productId/:productTitle" element={<ProductDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/cart-message" element={<CartMessage />} />
          <Route path="/cart-message-fail" element={<CartMessageFail />} />
        </Route>

        <Route element={<NoFooterLayout />}>
          <Route path="/news" element={<News />} />
        </Route>

        {/* Layout del profile */}
        <Route element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Layout sin header/footer */}
        <Route element={<CartLayout />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-info" element={<CartInfo />} />
          <Route path="/cart-shipping" element={<CartShipping />} />
          <Route path="/cart-payment" element={<CartPayment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
