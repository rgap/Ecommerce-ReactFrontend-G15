import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export default function MainLayout() {
  const user = useSelector((state) => state.user.data);

  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
