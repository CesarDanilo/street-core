import brand_1 from '../assets/brand-1.jpg'
import brand_2 from '../assets/brand-2.jpg'

export function SectionBrand() {
  return (
    <div className="flex flex-col md:grid grid-cols-2 h-screen gap-8 p-10 md:mt-[100px] bg-black text-white">

      {/* ESQUERDA */}
      <div className="flex flex-col justify-between text-start">

        <span className="text-3xl font-extrabold leading-none">
          PALACE · DIRECTION OF BRAND
          DEVELOPMENT TO MODERNITY
          DYNAMICS. INNOVATION AND
          PRECISION
        </span>

        <img
          src={brand_2}
          className="w-full h-[80%] object-cover bg-gray-300"
        />

      </div>

      {/* DIREITA (imagem grande) */}
      <div className="h-full">
        <img
          src={brand_1}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  )
}