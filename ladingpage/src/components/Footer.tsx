import logo from "../assets/c.png";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </div>
        <div className="flex flex-col gap-4 text-sm text-start">
          <span className="cursor-pointer hover:opacity-70 transition">ABOUT</span>
          <span className="cursor-pointer hover:opacity-70 transition">CATEGORIES</span>
          <span className="cursor-pointer hover:opacity-70 transition">CONTACT</span>
          <span className="cursor-pointer hover:opacity-70 transition">SHOP</span>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-300 text-start">
          <span>SOCIAL MEDIA</span>
          <span>+99 (99) 9 9999-9999</span>
          <span>Brasil MS, Rua ******</span>
          <span>PRIVACY RESERVED</span>
        </div>
      </div>

    </footer>
  );
}