import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import fancyLogo from "@/app/images/fancy-logo.png";

type Props = {};

interface HeaderLink {
  url: string;
  text: string;
}

const headerLinks: HeaderLink[] = [
  {
    url: "somewhere/",
    text: "Somewhere",
  },
  {
    url: "somewhere-else/",
    text: "Somewhere Else",
  },
  {
    url: "about/",
    text: "About",
  },
];

const HeaderContainer = (props: Props) => {
  return (
    <aside className="[grid-area:aside] md:mt-24">
      <Header />
    </aside>
  );
};

const Header = (props: Props) => {
  return (
    <header className="flex flex-col px-4 py-2 xl:px-8 xl:py-4 sticky top-0 z-50">
      <Link href="/">
        <Image
          src={fancyLogo.src}
          alt="Insights logo"
          width={150}
          height={33}
          className={clsx("hidden", "sm:block")}
        />
        <Image
          src={fancyLogo.src}
          alt="Insights logo"
          width={104}
          height={12}
          className="sm:hidden"
          quality={100}
        />
      </Link>
      {headerLinks.map((link) => (
        <a href={link.url} key={link.url} className="mt-2">
          {link.text}
        </a>
      ))}
    </header>
  );
};

export default HeaderContainer;
