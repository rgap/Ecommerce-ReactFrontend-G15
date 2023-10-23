import { inputs } from "./form";

export default function CartInfo(){

    return(
        <>
        
        <section className="cart-info-left lg:w-[60%] ml-10">

        <div className="flex justify-center">
          <div
            className="md:flex place-items-baseline w-[300px] md:w-[400px] xl:w-[600px] justify-between "
          >
            <div className="text-lg break-words"> Contacto </div>
            <div className="max-sm:hidden flex justify-start items-end gap-5">
              <p className="text-lg  break-words"> ¿Ya tienes una cuenta? </p>
              <p className="text-lg  break-words cursor-pointer hover:underline">
                Ingresar
              </p>
            </div>
          </div>

        </div>

        </section>

        </>


    )
}