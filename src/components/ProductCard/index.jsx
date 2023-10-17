/* eslint-disable react/prop-types */
export default function ProductCard({
  productImage,
  productTitle,
  productText,
  productPrice,
  productColors,
}) {
  return (
    <div>
      <div className="overflow-hidden">
        <img
          className="w-full object-contain transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
          src={productImage}
          alt={productTitle}
        />
      </div>
      <div className="p-[10px]">
        <div className="font-bold leading-6">{productTitle}</div>
        <div className="flex justify-between mb-2">
          <div className="leading-6">{productText}</div>
          <div className="font-bold text-right">{productPrice}</div>
        </div>
        <div className="inline-flex justify-start items-end gap-2">
          <div className="w-[24px] h-[24px] relative bg-red-400 rounded-[24px]"></div>
          <div className="w-[24px] h-[24px] relative bg-black rounded-[24px]"></div>
          <div className="w-[24px] h-[24px] relative bg-blue-500 rounded-[24px]"></div>
        </div>
      </div>
    </div>
  );
}
