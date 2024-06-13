import type { ReactNode } from "react";

const PopoverHeader = ({ children }: { children: ReactNode }) => {
  return <div className="p-2 border-b border-gray-100">{children}</div>;
};

export default PopoverHeader;
