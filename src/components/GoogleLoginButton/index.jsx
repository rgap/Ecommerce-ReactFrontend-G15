/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function GoogleLoginButton({ onUserLogin }) {
  useEffect(() => {
    // Dynamically load the Google Identity Services library script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Replace with your client ID
        callback: (response) => onUserLogin(response.credential),
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" } // Customize the button appearance
      );
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [onUserLogin]); // Depend on props to ensure re-initialization if props change

  return <div id="googleSignInButton"></div>; // This div will be replaced by the Google sign-in button
}
