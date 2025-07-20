import mangaIcon from "../assets/img/manga-icon.png";
import shoppingCartIcon from "../assets/img/shopping-cart-icon.png";
import { Link } from "react-router-dom";
import type { TManga } from "../Types";

type TNav = {
  chosenManga: TManga[];
};

export default function Navbar({ chosenManga }: TNav) {
  return (
    <nav className="flex m-4 md:m-10 items-center justify-around md:self-start gap-1 md:gap-10 bg-gray-300/50 backdrop-blur-sm rounded-xl p-3 md:max-w-[400px] container">
      <Link to="/" className="min-w-[50px]">
        <img
          src={mangaIcon}
          alt="manga book icon"
          height="auto"
          width={60}
          className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
        />
      </Link>
      <Link to="/cart" className="relative">
        <img
          src={shoppingCartIcon}
          alt="shopping cart icon"
          width={60}
          height="auto"
          className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer min-w-[50px]"
        />
        {chosenManga && chosenManga.length > 0 ? (
          <div className="absolute top-0 right-0 text-xl rounded-full w-8 h-8 font-bold bg-red-600 text-white flex justify-center items-center">
            {chosenManga.length > 99 ? (
              <p>99&#43;</p>
            ) : (
              <p>{chosenManga.length}</p>
            )}
          </div>
        ) : (
          <></>
        )}
      </Link>
      <Link
        to="/shop/popular"
        className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
      >
        Shop
      </Link>
    </nav>
  );
}
