export default function ProductCard ({productImage,productTitle,productText,productPrice,productColor1,productColor2,productColor3}){

    return(
        <div>
          <a href="./productsdetails">
          <img
              className="w-full h-[370px] object-contain"
              src={productImage}
              alt={productTitle}
            />
          </a>
            <div className="mt-2">
              <div className="font-bold leading-6">{productTitle}</div>
              <div className="flex justify-between">
              <div className="leading-6">{productText}</div>
                <div className="font-bold text-right">{productPrice}</div>
              </div>
              <div className="flex justify-start gap-2 mt-2">
                <div
                  className={`w-[24px] h-[24px] relative ${productColor1} rounded-[24px]`}
                ></div>
                <div
                  className={`w-[24px] h-[24px] relative ${productColor2} rounded-[24px]`}
                ></div>
                <div
                  className={`w-[24px] h-[24px] relative ${productColor3} rounded-[24px]`}
                ></div>
              </div>
             
            </div>
        </div>
    )
}

