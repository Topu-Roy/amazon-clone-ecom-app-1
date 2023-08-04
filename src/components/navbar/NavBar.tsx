import AmazoneLogo from "../AmazoneLogo";
import SearchBar from "./SearchBar";
import { BsPerson } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { CartCount, FavoritesCount } from "./ItemCount";
import Link from "next/link";

function NavBar() {
  const submitSearch = () => {};

  // const [cartItemCount, setCartItemCount] = useState(10);

  return (
    <header className=" mx-auto bg-gray-800 text-white">
      <nav className="flex justify-between items-center container mx-auto gap-4 h-14 px-2">
        {/* Logo & Location */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href={"/"}
            className="flex items-center justify-center h-full hover:ring-1 ring-white"
          >
            <AmazoneLogo />
          </Link>

          <div className="text-sm flex items-center justify-center flex-row gap-1 hover:ring-1 ring-white">
            <SlLocationPin size={25} color={"#e3d4d3"} />
            <div className="flex flex-col justify-center items-start">
              <p className="text-xs text-gray-300/80">Deliver to</p>
              <p>Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Profile , Favorite & Cart */}
        <div className="flex h-14 items-center justify-between gap-5 text-sm">
          <Link
            href={"/profile"}
            className="flex items-center justify-center gap-1 hover:ring-1 ring-white"
          >
            <BsPerson size={30} color={"#e3d4d3"} />
            <p className="">Profile</p>
          </Link>

          <Link
            href={"/favorites"}
            className="flex relative items-center justify-center gap-2 hover:ring-1 ring-white"
          >
            <span className="absolute font-semibold p-0.5 text-xs left-[15%] -top-[45%] bg-slate-200 rounded-full text-gray-700 h-5 w-5 aspect-square flex items-center justify-center">
              {/* {cartItemCount > 99 ? "99+" : cartItemCount} */}
              <FavoritesCount />
            </span>
            <MdOutlineFavoriteBorder size={25} color={"#e3d4d3"} />
            <p className="">Favorites</p>
          </Link>

          <Link
            href={"/cart"}
            className="flex relative items-center justify-center gap-2 hover:ring-1 ring-white"
          >
            <span className="absolute font-semibold p-0.5 text-xs left-[25%] -top-[45%] bg-slate-200 rounded-full text-gray-700 h-5 w-5 aspect-square flex items-center justify-center">
              {/* {cartItemCount > 99 ? "99+" : cartItemCount} */}
              <CartCount />
            </span>
            <FiShoppingCart size={23} color={"#e3d4d3"} />
            <p className="">Cart</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
