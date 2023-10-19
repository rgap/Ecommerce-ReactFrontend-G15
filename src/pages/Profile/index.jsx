/* eslint-disable react/prop-types */
import { useState } from "react";
import { EditableField } from "../../components";

export default function Profile() {
  
  const [isEditing, setIsEditing] = useState(false);

  const changeToLabels = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  const changeToInputs = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  return (
    <main className="bg-white flex justify-center items-center p-5 h-fit">
      <div className="bg-white p-6 w-screen md:w-fit">
        <span className="mb-7 flex items-center cursor-pointer">
          <img
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
          />
          <a className="ml-5 text-[--color-main-text]" href="/">
            Volver a la página de inicio
          </a>
        </span>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Mi Cuenta
        </h1>

        <form className="mb-6">
          <h2 className="text-base mb-4 font-semibold">Mis Datos Personales</h2>
          <hr className="mb-5" />

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center mb-10 text-center md:text-start">
            <EditableField
              isEditing={isEditing}
              label="Correo Electrónico"
              value="beautipol.alpha.1@gmail.com"
              type="email"
            />
            <EditableField
              isEditing={isEditing}
              label="Nombre Completo"
              value="Alpha Tester 1"
              type="text"
            />
            <EditableField
              isEditing={isEditing}
              label="Teléfono"
              value="+51 999 999 999"
              type="tel"
            />
            <EditableField
              isEditing={isEditing}
              label="Dirección"
              value="Cercado"
              type="text"
            />
            <EditableField
              isEditing={isEditing}
              label="Casa o Apt."
              value="-"
              type="text"
            />
            <EditableField
              isEditing={isEditing}
              label="Ciudad"
              value="Arequipa"
              type="text"
            />
            <EditableField
              isEditing={isEditing}
              label="Región"
              value="Arequipa"
              type="text"
            />
            <EditableField
              isEditing={isEditing}
              label="País"
              value="Perú"
              type="text"
              id="country"
            />
          </div>

          <div className="flex justify-center">
            {isEditing ? (
              <button
                id="button-save"
                className="mb-6 mt-2 items-center px-20 py-4 bg-[--color-button-text-hero] text-white text-sm capitalize leading-normal transition-transform duration-100"
                onClick={changeToLabels}
              >
                Guardar Cambios
              </button>
            ) : (
              <button
                id="button-change"
                className="mb-6 mt-2 items-center px-20 py-4 bg-[--color-bg-header-footer] hover:bg-[--color-button-text-hero] text-white text-sm capitalize leading-normal transition-transform duration-100"
                onClick={changeToInputs}
              >
                Cambiar
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
