import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const typeVariants = cva("ui-tracking-normal ui-font-extralight", {
  variants: {
    variant: {
      primary: "ui-text-base sm:ui-text-base 3xl:ui-text-2xl",
      title: "ui-text-2xl sm:ui-text-base 3xl:ui-text-2xl",
      h5: "ui-text-[22px] sm:ui-text-[32px] 3xl:ui-text-[40px] ui-font-light",
      h4: "ui-text-[24px] sm:ui-text-[36px] 3xl:ui-text-[50px] ui-font-light",
      h2: "ui-text-[37px] sm:ui-text-[36px] 3xl:ui-text-[50px] ui-font-light",
      body: "3xl:ui-text-xl ui-text-base ui-font-light ui-leading-snug",
      empty: "empty",
    },
  },
  defaultVariants: {
    variant: "empty",
  },
});

export type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typeVariants> & {
    asChild?: boolean;
  };

export const Typography = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ variant, className, asChild, ...rest }, ref) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp
      ref={ref}
      className={typeVariants({ variant, className })}
      {...rest}
    />
  );
});

Typography.displayName = "Typography";
