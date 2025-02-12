import Link from "next/link";
import React from "react";
import * as ROUTES from "@/constants/routes";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-[1000]">
        <header className="h-12 bg-background border-b border-border">
          <div className="container">
            <Link href={ROUTES.HOME}></Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
