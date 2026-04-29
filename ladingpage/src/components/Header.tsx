import { Handbag, Menu, Search } from "lucide-react";
import logo from "../assets/c.png"
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header flex flex-col md:flex-row  justify-between items-center p-10 gap-10 md:p-10">
      <div className="logo w-40 h-12">
        <img className="w-full h-full object-contain" src={logo} alt="" />
      </div>
      <div className="menu flex gap-9 text-xs">
        <span className="relative text-white cursor-pointer
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-full after:bg-white 
          after:scale-x-0 after:origin-left 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100">
          HOME
        </span>
        <span className="relative text-white cursor-pointer
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-full after:bg-white 
          after:scale-x-0 after:origin-left 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100">SHOP</span>
        <span className="relative text-white cursor-pointer
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-full after:bg-white 
          after:scale-x-0 after:origin-left 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100">CATEGORIES</span>
        <span className="relative text-white cursor-pointer
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-full after:bg-white 
          after:scale-x-0 after:origin-left 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100">ABOUNT</span>
        <span className="relative text-white cursor-pointer
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-full after:bg-white 
          after:scale-x-0 after:origin-left 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100">CONTACT</span>
      </div>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Buscar..."
          className={`
          bg-transparent border-b border-white outline-none text-white
          transition-all duration-300 ease-in-out
          ${open ? "w-40 opacity-100 ml-2" : "w-0 opacity-0"}
        `}
        />
        <div className="w-6 h-6 text-white cursor-pointer" 
        onClick={() => setOpen(!open)}>
          <Search />
        </div>
        <div className="w-6 h-6 text-white cursor-pointer">
          <Handbag />
        </div>
        <div className="w-6 h-6 text-white cursor-pointer">
          <Menu />
        </div>
      </div>

    </div>
  );
}