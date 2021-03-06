import Head from "next/head";
import Avatar from "@components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "@components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png" />
        </div>
      </header>

      <form className="flex flex-col items-center flex-grow mt-32 w-4/5">
        <img
          loading="lazy"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          className="object-contain"
          height={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-2 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="button">
            Google Search
          </button>

          <button onClick={search} className="button">
            I'm Feeling Lucky
          </button>
        </div>

        <button hidden onClick={search}>
          Search
        </button>
      </form>

      <Footer />
    </div>
  );
}
