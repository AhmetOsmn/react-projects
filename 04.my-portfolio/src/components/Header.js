import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <button
        className="px-6 py-2 bg-secondary-light text-gray-800 rounded-md font-semibold uppercase dark:bg-secondary-dark dark:text-white mr-8"
      >
          DARK
      </button>
    </header>
  );
};

export default Header;
