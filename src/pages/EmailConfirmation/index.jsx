import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { sendGetRequest } from "../../services"; // Adjust the import path for your service
import { saveUser } from "../../slices/userSlice"; // Adjust the import path as necessary

export default function EmailConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (!token) {
      navigate("/login"); // Redirect if no token is found
      return;
    }

    verifyAndLoginUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, navigate, dispatch]);

  const verifyAndLoginUser = async (token) => {
    const response = await sendGetRequest(`users/verify-token?token=${token}`);
    if (response.ok && response.data.email) {
      dispatch(saveUser({ email: response.data.email }));
      navigate("/"); // Redirect to the homepage
    } else {
      navigate("/login"); // Redirect to login on failure
    }
  };

  // JSX for rendering a loading indicator or a message
  return (
    <div className="email-confirmation">
      <h1>Email Confirmed</h1>
      <p>Your email has been successfully verified.</p>
      <p>Redirecting to the homepage...</p>
    </div>
  );
}
