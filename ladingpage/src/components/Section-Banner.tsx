import banner_1 from "../assets/banner-1.jpg";
import banner_2 from "../assets/banner-2.jpg";
import banner_3 from "../assets/banner-3.jpg";

export function SectionBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-10">

      {/* BANNER 1 */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={banner_1}
          alt="banner 1"
        />

        <div className="absolute bottom-4 left-4 flex flex-col text-white text-start">
          <span className="text-xl md:text-4xl font-bold leading-none">
            PALACE
          </span>
          <span className="text-lg md:text-3xl font-bold leading-none">
            STREET FASHION
          </span>
        </div>
      </div>

      {/* BANNER 2 */}
      <div className="w-full h-[300px] md:h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={banner_2}
          alt="banner 2"
        />
      </div>

      {/* BANNER 3 */}
      <div className="w-full h-[300px] md:h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={banner_3}
          alt="banner 3"
        />
      </div>

    </div>
  );
}