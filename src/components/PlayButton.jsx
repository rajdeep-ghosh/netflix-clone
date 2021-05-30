import React from "react";

export default function PlayButton() {
  return (
    <button className="banner__btn rounded-3xl flex items-center hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
      </span>
      <span className="uppercase tracking-wide font-normal">
        &nbsp;&nbsp;Play
      </span>
    </button>
  );
}
