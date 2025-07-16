import mangaIcon from "../assets/img/manga-icon.png";
import shoppingCartIcon from "../assets/img/shopping-cart-icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex m-4 md:m-10 items-center justify-around md:self-start">
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
        className="border-1 rounded-lg px-2 md:w-[300px] h-[35px]"
        type="text"
        placeholder="Search Manga..."
      />
      <Link to="/shop">
        <img
          src={shoppingCartIcon}
          alt="shopping cart"
          height="auto"
          width={60}
          className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
        />
      </Link>
    </div>
  );
}
