import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export default function MainLayout() {
  const globalUser = useSelector((state) => state.user.data);

  if (!globalUser) return <Navigate to="/login" />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
