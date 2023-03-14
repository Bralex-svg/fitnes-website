import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}></div>
    </nav>
  );
};

export default Navbar;
