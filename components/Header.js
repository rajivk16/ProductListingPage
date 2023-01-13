import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://www.flipkart.com/flipkart-logo.png"
          className="h-8"
          alt="Flipkart logo"
        />
        <span className="ml-2 text-xl font-medium text-gray-700">Flipkart</span>
      </div>
      <div className="flex items-center">
        <form className="relative">
          <input
            type="search"
            className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Search for products, brands and more"
          />
          <button className="absolute top-0 right-0 mr-3 mt-2">
            <svg
              className="h-4 w-4 text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
        <button className="ml-3">
          <svg
            className="h-5 w-5 text-gray-700"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.782-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
          </svg>
        </button>
        <button className="ml-3">
          <svg
            className="h-5 w-5 text-gray-700"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </button>
        <button className="ml-3">
          <svg
            className="h-5 w-5 text-gray-700"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9.5 21H13.5C13.78 21 14 20.78 14 20.5V11.5C14 11.22 13.78 11 13.5 11H9.5C9.22 11 9 11.22 9 11.5V20.5C9 20.78 9.22 21 9.5 21Z"></path>
            <path d="M7.5 21H6C5.72 21 5.5 20.78 5.5 20.5V18.5C5.5 18.22 5.72 18 6 18H7.5C7.78 18 8 18.22 8 18.5V20.5C8 20.78 7.78 21 7.5 21Z"></path>
            <path d="M17.5 21H16C15.72 21 15.5 20.78 15.5 20.5V16.5C15.5 16.22 15.72 16 16 16H17.5C17.78 16 18 16.22 18 16.5V20.5C18 20.78 17.78 21 17.5 21Z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
