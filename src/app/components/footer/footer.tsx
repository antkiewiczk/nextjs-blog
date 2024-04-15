import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

import fancyLogo from "@/app/images/fancy-logo2.png";
import { BasicLink, LinkWithText } from "@/app/types/navigation";

const footerLinks: LinkWithText[] = [
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

const socialMediaLinks: BasicLink[] = [
  {
    url: "https://www.linkedin.com/in/antkiewiczk",
  },
  {
    url: "https://www.github.com/antkiewiczk",
  },
  {
    url: "about/",
  },
];

const Footer = () => (
  <div className="[grid-area:footer] p-8 bg-indigo-600 text-white">
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full">
      <div className="order-last mt-4 md:order-first md:mt-0">
        {socialMediaLinks.map((link) => (
          <SocialIcon
            url={link.url}
            key={link.url}
            bgColor="#fff"
            fgColor="#4f46e5"
            className="ml-3"
          />
        ))}
      </div>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 justify-start md:justify-end items-center">
        <div className="flex flex-col md:flex-row">
          {footerLinks.map((link) => (
            <Link href={link.url} key={link.url} className="ml-3 mt-2">
              {link.text}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="object-contain sm:max-w-[120px] ml-3 md:justify-self-end my-8 md:my-0"
        >
          <Image src={fancyLogo.src} alt="logo fancy" width={120} height={80} />
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
