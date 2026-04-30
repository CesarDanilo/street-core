import { Send } from "lucide-react";

export function NewsLetter() {
  return (
    <div className="bg-black text-white px-6 mt-[400px] md:px-20 py-20">

      <div className="max-w-3xl text-start">
        <span className="text-2xl md:text-4xl font-extrabold leading-none">
          SUBSCRIBE TO OUR NEWSLETTER
        </span>

        <p className="mt-2 text-lg md:text-2xl italic text-gray-300">
          STAY UPDATED WITH THE LATEST NEWS
        </p>
      </div>

      <div className="mt-10 max-w-2xl relative">
        <input
          type="text"
          placeholder="ENTER YOUR EMAIL"
          className="w-full bg-transparent border-b border-gray-400 outline-none py-3 pr-10 text-gray-300 placeholder-gray-500"
        />

        <Send className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
      </div>

    </div>
  );
}