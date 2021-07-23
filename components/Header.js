import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import Avatar from "./Avatar";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          loading="lazy"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={360}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          classes="ml-auto"
          url="https://lh3.googleusercontent.com/ogw/ADea4I6ue6ul3ozCcUYNy63qPsdyJ5zRRK5GenxA4mELWg=s192-c-mo"
        />
      </div>
    </header>
  );
};

export default Header;
