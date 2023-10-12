import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { MainLayout } from "../layouts";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
