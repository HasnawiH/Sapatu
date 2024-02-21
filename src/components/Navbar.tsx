import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            PRIA
          </Link>
          <Link className="navbar__link relative" href="#">
            WANITA
          </Link>
          <Link className="navbar__link relative" href="#">
            ANAK
          </Link>
          <Link className="navbar__link relative" href="#">
            OLAHRAGA 
          </Link>
          <Link className="navbar__link relative" href="#">
            PROMO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
