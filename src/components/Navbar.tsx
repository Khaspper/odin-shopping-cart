import mangaIcon from "../assets/img/manga-icon.png";
import shoppingCartIcon from "../assets/img/shopping-cart-icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex m-4 md:m-10 items-center justify-around md:self-start gap-1 md:gap-10 bg-gray-300/50 backdrop-blur-sm rounded-xl p-3">
      <Link to="/">
        <img
          src={mangaIcon}
          alt="manga book icon"
          height="auto"
          width={60}
          className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
        />
      </Link>
      {/* Change this to Searchbar */}
      <input
        name="searchBar"
        className="border-1 rounded-lg px-2 w-[175px] sm:w-[300px] h-[25px] sm:h-[35px]"
        type="text"
        placeholder="Search Manga..."
      />
      <Link to="/cart">
        <img
          src={shoppingCartIcon}
          alt="shopping cart"
          height="auto"
          width={60}
          className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
        />
      </Link>
      <Link
        to="/shop"
        className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
      >
        Shop
      </Link>
    </div>
  );
}
