import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Typography } from "@/app/components/typography/typography";
import { cn } from "@/app/helpers/cn";
import fancyLogo from "@/app/images/fancy-logo.png";

type Props = {
  termsVisible?: boolean;
};

const Footer = ({ termsVisible = true }: Props) => (
  <div className="[grid-area:footer] p-8 bg-orange-400">
    <div
      className={cn(
        "flex items-end justify-between gap-4 sm:gap-0",
        !termsVisible && "items-center"
      )}
    >
      <div className={cn("flex flex-col gap-8")}>
        <a
          href="https://www.fancy.io"
          target="_blank"
          rel="noreferrer"
          className="object-contain sm:max-w-[120px]"
        >
          <Image src={fancyLogo.src} alt="logo fancy" width={120} height={80} />
        </a>
        {termsVisible && (
          <Typography asChild className="text-muted-foreground text-sm">
            <a
              href="https://fancy.io/company/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>
          </Typography>
        )}
      </div>
      <div className="flex flex-col justify-between gap-10">
        <Link href="/" className="object-contain sm:max-w-[120px]">
          <Image src={fancyLogo.src} alt="logo fancy" width={120} height={80} />
        </Link>
        {termsVisible && (
          <Typography
            asChild
            className="text-muted-foreground text-center text-sm"
          >
            <a
              href="https://fancy.io/company/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </Typography>
        )}
      </div>
      <div className="flex flex-col items-end gap-10">
        <a
          href="https://fancy.io"
          target="_blank"
          rel="noreferrer"
          className="object-contain sm:max-w-[120px]"
        >
          <Image src={fancyLogo.src} alt="logo fancy" width={120} height={80} />
        </a>
        {termsVisible && (
          <Typography
            asChild
            className="text-muted-foreground text-right text-sm"
          >
            <a href="mailto:info@fancy.io" target="_blank" rel="noreferrer">
              Contact us
            </a>
          </Typography>
        )}
      </div>
    </div>
  </div>
);

export default Footer;
