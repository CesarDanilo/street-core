import banner_1 from "../assets/banner-1.jpg";
import banner_2 from "../assets/banner-2.jpg";
import banner_3 from "../assets/banner-3.jpg";

export function SectionBanner() {
  return (
    <div className="flex p-10">
      <div className="w-[550px] relative">
        <img className="h-full w-full" src={banner_1} alt="banner 1" />

        <div className="absolute bottom-4 left-4 flex flex-col md:text-4xl font-bold
         text-white text-start">
          <span>PALACE</span>
          <span>STREET FASHION</span>
        </div>
      </div>
      <div className="w-[550px]">
        <img className="h-full w-full" src={banner_2} alt="banner 1" />
      </div>
      <div className="w-[550px]">
        <img className="h-full w-full" src={banner_3} alt="banner 1" />
      </div>
    </div>
  )
}