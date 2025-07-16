import mangaIcon from "../assets/img/manga-icon.png";
import shoppingCartIcon from "../assets/img/shopping-cart-icon.png";

export default function Navbar() {
  return (
    <div className="border-2 flex m-4 items-center justify-between md:self-start">
      <img src={mangaIcon} alt="manga book icon" height="auto" width={40} />
      {/* Change this to Searchbar */}
      <input
        className="border-2 rounded-full px-2 md:w-[300px]"
        type="text"
        placeholder="Search Manga..."
      />
      <img
        src={shoppingCartIcon}
        alt="shopping cart"
        height="auto"
        width={40}
      />
    </div>
  );
}
