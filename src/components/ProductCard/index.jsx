export default function ProductCard ({productImage,productTitle,productText,productPrice,productColors}){

    return(
        <div>
            <img
              className="w-full object-contain"
              src={productImage}
              alt={productTitle}
            />
            <div>
              <div className="font-bold leading-6">{productTitle}</div>
              <div className="flex justify-between">
              <div className="leading-6">{productText}</div>
                <div className="font-bold text-right">{productPrice}</div>
              </div>
              <div className="flex justify-start gap-2 mt-2">
                <div
                  className="w-[24px] h-[24px] relative bg-blue-400 rounded-[24px]"
                ></div>
                <div
                  className="w-[24px] h-[24px] relative bg-red-400 rounded-[24px]"
                ></div>
                <div
                  className="w-[24px] h-[24px] relative bg-green-400 rounded-[24px]"
                ></div>
              </div>
             
            </div>
        </div>
    )
}

