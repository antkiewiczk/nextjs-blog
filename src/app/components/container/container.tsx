import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto max-w-[1920px] [grid-area:main]">{children}</div>;
};

export default Container;
