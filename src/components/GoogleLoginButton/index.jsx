/* eslint-disable react/prop-types */
export default function MockGoogleLoginButton(props) {
  const handleMockLogin = () => {
    // Simulate the data you'd get from a real Google login
    const mockUserData = {
      id: "mockGoogleId12345",
      name: "Beautipol Alpha",
      email: "beautipol.alpha.1@gmail.com",
      imageUrl:
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-logo.png",
    };

    // Pass this mock data to the parent component or wherever you handle the login
    props.onUserLogin(mockUserData);
  };

  return (
    <img
      src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/google.svg"
      className="cursor-pointer"
      alt="Google login"
      onClick={handleMockLogin}
    />
  );
}
