import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "../Link";

type NavbarProps = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: NavbarProps) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 `}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} gap-8 text-sm `}>
                <Link
                  page="home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
