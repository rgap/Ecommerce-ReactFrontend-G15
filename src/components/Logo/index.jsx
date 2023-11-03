import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <>
      <div className="mx-5 my-3 md:mx-10 md:my-5">
        <img
          onClick={redirect("/")}
          className="h-[50px] md:h-[70px] hover:cursor-pointer "
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
          alt=""
        />
      </div>
    </>
  );
}
