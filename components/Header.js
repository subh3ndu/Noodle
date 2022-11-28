import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { CrossIcon, SearchIcon } from "./Icons";
import Avatar from "./Avatar";
import HeaderOptions from "../components/HeaderOptions";
import logo from "../public/noodle.png"

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?q=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={logo}
          width={110}
          height={25}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-5 sm:ml-10 sm:mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <CrossIcon
            className="h-5 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <SearchIcon
            className="h-5 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"
            onClick={search}
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          className="hidden md:inline-flex ml-auto"
          url="https://picsum.photos/200/300"
        />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
