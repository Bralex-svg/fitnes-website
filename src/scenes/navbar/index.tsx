import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 `}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full `}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
