import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { SearchIcon, ToolsIcon } from "../components/Icons";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import logo from "../public/noodle.png"

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?q=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Noodle</title>
        <meta
          name="description"
          content="Noodle best search engine in the universe"
        />
        <link rel="icon" href="./noodle_top.svg" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Nmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ToolsIcon className="h-6" />

          {/* Avatar */}
          <Avatar url="https://picsum.photos/200/300" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-36 flex-grow w-4/5">
        <Image
          width={300}
          height={75}
          src={logo}
        />
        <div className="flex w-full mt-5 px-5 py-3 max-w-sm rounded-full hover:shadow-md focus-within:shadow-md border border-gray-200 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-4 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </div>

        <div className="flex space-x-4 mt-5">
          <button className="btn" onClick={search}>
            Noodle Search
          </button>
          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
