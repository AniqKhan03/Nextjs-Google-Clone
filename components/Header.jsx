import { MicrophoneIcon } from "@heroicons/react/outline";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    console.log(term);

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          alt="Google logo"
          width={110}
          height={60}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items center">
          <input
            defaultValue={router.query.term}
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />

          <XIcon
            className="h-7 pr-4 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
