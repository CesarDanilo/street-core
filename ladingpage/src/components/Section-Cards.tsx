import card_1 from "../assets/card-1.jpg"
import card_2 from "../assets/card-2.jpg"
import card_3 from "../assets/card-3.jpg"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4">

      <div className="relative w-full h-[490px]">
        <img className="w-full h-full object-cover" src={card_1} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>

      <div className="relative w-full h-[490px]">
        <img className="w-full h-full object-cover" src={card_2} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>

      <div className="relative w-full h-[490px]">
        <img className="w-full h-full object-cover" src={card_3} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>

    </div>
  )
}