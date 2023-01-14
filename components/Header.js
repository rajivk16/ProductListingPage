import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="bg-blue-700 px-4 py-2 flex items-center space-x-10">
        
      {/* To maike it sticky : fixed top-0 left-0 w-full z-10 */}

      {/* Logo section of the Header */}

      <div className="flex items-center space-x-5">
        <img
          src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-inventory-management-system-zap-inventory-1.png"
          className="h-14"
          alt="Flipkart logo"
        />
        <span className="ml-2 text-xl font-medium text-white">Flipkart</span>
      </div>

      {/* Search bar of the Header */}

      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          type="text"
        />
        <MagnifyingGlassIcon className="h-12 p-4" />
      </div>

      {/* Right Section of the Header */}

      <div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer">
            <p>Sign In</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center cursor-pointer">
            {/* <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black"></span> */}
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
