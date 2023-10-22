import { Outlet } from "react-router-dom";
import { HeaderWhite } from "../../components";

export default function CartLayout() {
    return (
      <>
        <HeaderWhite/>
        <Outlet />
      </>
    );
  }