import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export default function NoFooterLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
