import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Cart, Home, Products, ProductsDetails, Profile, Register } from "../pages";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productsdetails" element={<ProductsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
