import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendGetRequest } from "../../services"; // Adjust the import path as necessary

export default function EmailVerification() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("Verificando correo electrónico...");
  const [countdown, setCountdown] = useState(7); // Countdown starts at 7 seconds
  const [progress, setProgress] = useState(100); // Progress bar starts at 100%

  useEffect(() => {
    const verifyEmail = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        setMessage("No se encontró el token de verificación.");
        startCountdown();
        return;
      }

      try {
        const response = await sendGetRequest(
          `users/verify-email?token=${token}`
        );

        if (response.ok) {
          setMessage("Correo electrónico verificado con éxito.");
        } else {
          handleErrors(response);
        }
      } catch (error) {
        setMessage(
          "Error de conexión al servidor. Por favor, verifica tu conexión a internet."
        );
      } finally {
        // Start countdown regardless of the outcome
        startCountdown();
      }
    };

    verifyEmail();
  }, [navigate]);

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      setCountdown((currentCountdown) => {
        if (currentCountdown <= 1) {
          clearInterval(intervalId);
          navigate("/login");
        }
        return currentCountdown - 1;
      });
      setProgress((prevProgress) => prevProgress - 100 / 7);
    }, 1000);
  };

  const handleErrors = (response) => {
    switch (response.status) {
      case 404:
        setMessage("El token es inválido o ha expirado.");
        break;
      case 409:
        setMessage(
          "Este correo electrónico ya ha sido verificado previamente."
        );
        break;
      default:
        setMessage(
          "Error al verificar el correo electrónico. Por favor, intenta de nuevo o contacta al soporte si el problema persiste."
        );
    }
  };

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px] rounded-lg">
        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Verificación de Correo Electrónico
        </h1>
        <p className="text-center mb-5">
          {message}{" "}
          {countdown > 0 ? `Redirigiendo en ${countdown} segundos...` : ""}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-[#748c70] h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-center mt-5">
          <a
            onClick={() => navigate("/")}
            className="text-base underline cursor-pointer"
          >
            Volver a la página de inicio
          </a>
        </div>
      </div>
    </main>
  );
}
