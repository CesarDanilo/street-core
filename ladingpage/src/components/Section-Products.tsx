import produto_1 from "../assets/produto-1.jpg"
import produto_2 from "../assets/produto-2.jpg"
import produto_3 from "../assets/produto-3.jpg"
import produto_4 from "../assets/produto-4.jpg"


const produtos = [
  {
    img: produto_1,
    title: "Camiseta Oversize",
    price: "$10.99"
  },
  {
    img: produto_2,
    title: "Camiseta Oversize",
    price: "$10.99"
  },
  {
    img: produto_3,
    title: "Camiseta Oversize",
    price: "$10.99"
  },
  {
    img: produto_4,
    title: "Camiseta Oversize",
    price: "$10.99"
  },
]


export function SectionProducts() {
  return (
    <div className="section-products flex flex-col md:flex-row justify-center items-center p-10 md:mt-[100px] gap-10">
      {produtos.map((item, index) => (
        <div
          key={index}
          className="products flex flex-col items-center w-[290px]"
        >
          <div className="w-[245px] h-[245px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          </div>

          <span className="text-white text-xs mt-6">{item.title}</span>
          <span className="text-white text-xs">{item.price}</span>
        </div>
      ))}
    </div>
  )
}