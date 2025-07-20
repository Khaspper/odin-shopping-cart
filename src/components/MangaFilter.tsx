import { Link } from "react-router-dom";

export default function MangaFilter() {
  return (
    <nav className="flex m-4 md:m-10 items-center justify-around md:self-start gap-1 md:gap-10 bg-gray-300/50 backdrop-blur-sm rounded-xl p-3 md:max-w-[450px] container h-[85px]">
      <Link to="/shop/popular" className="min-w-[50px]">
        <h1>Popular</h1>
      </Link>
      <Link to="/shop/ongoing" className="relative">
        <h1>On Going</h1>
      </Link>
      <Link
        to="/shop/community-favorite"
        className="transition delay-100 duration-300 ease-in-out hover:scale-120 cursor-pointer"
      >
        <h1>Community Favorites</h1>
      </Link>
    </nav>
  );
}
