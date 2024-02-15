/* eslint-disable react/prop-types */
export default function MockGoogleLoginButton(props) {
  const handleMockLogin = () => {
    const mockUserData = {
      id: "mockGoogleId12345",
      name: "Beautipol Alpha",
      email: "beautipol.alpha.1@gmail.com",
      temporaryPassword: "mockGooglePassword12345",
      imageUrl:
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-logo.png",
    };
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
