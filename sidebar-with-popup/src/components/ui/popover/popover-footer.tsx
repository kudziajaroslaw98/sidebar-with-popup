import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";

const PopoverFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-2 border-t border-gray-100", className)}>
      {children}
    </div>
  );
};

export default PopoverFooter;
