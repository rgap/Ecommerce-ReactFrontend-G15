import React, { useState, useEffect} from 'react';

const polosImages1 = [
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-turqueza-quiksilver.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-%20amarillo-billabong-logo.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-marron-ripcurl-floreado.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-nike-m.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-quiksilver.jpg"
];

  const polosImages2 = [
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-ripcurl.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-guinda-ripcurl.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-volcom.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-quiksilver.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-morado-adidas.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-gris-nike.jpg"
];

  const polosImages3 = [
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-blanco-quiksilver.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-amarillo-adidas.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-nike.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-ripcurl.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-celeste-quiksilver.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-durazno-volcom.jpg"
];

const Carousel = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((currentImage1 + 1) % polosImages1.length);
    }, 3000);

    return () => {
      clearInterval(interval); 
    };
  }, [currentImage1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage2((currentImage2 + 1) % polosImages2.length);
    }, 3000);

    return () => {
      clearInterval(interval); 
    };
  }, [currentImage2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage3((currentImage3 + 1) % polosImages3.length);
    }, 3000);

    return () => {
      clearInterval(interval); 
    };
  }, [currentImage3]);

  return (
    <div className="relative flex justify-evenly max-sm:flex-col max-sm:items-center max-sm:gap-5 max-lg:gap-3">
      <img src={polosImages1[currentImage1]} alt="Carousel" className="w-[300px] h-auto rounded-full max-sm:w-[250px] max-lg:w-[240px]" />
      <img src={polosImages2[currentImage2]} alt="Carousel" className="w-[300px] h-auto rounded-full max-sm:w-[250px] max-lg:w-[240px]" />
      <img src={polosImages3[currentImage3]} alt="Carousel" className="w-[300px] h-auto rounded-full max-sm:w-[250px] max-lg:w-[240px]" />
    </div>
  );
};

export default Carousel;