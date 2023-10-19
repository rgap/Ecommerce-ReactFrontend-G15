import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { MainLayout } from "../layouts";
import { Cart, Home, Products, ProductsDetails, Profile, Register } from "../pages";
=======
import { CartLayout, MainLayout } from "../layouts";
import { Cart, Home, Login, Products, ProductsDetails, Profile, Register } from "../pages";
>>>>>>> main

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productsdetails" element={<ProductsDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>
        
        /* Layout sin header y footer */
        <Route element={<CartLayout />}>
          <Route path="/cart" element={<Cart />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
