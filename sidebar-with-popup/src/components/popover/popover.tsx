import { Xmark } from "iconoir-react";
import PopoverBody from "./popover-body";
import PopoverFooter from "./popover-footer";
import PopoverHeader from "./popover-header";

interface PopoverProps {
  headline?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popover = ({ headline, open, onClose, children }: PopoverProps) => {
  return (
    <div
      data-open={open}
      className="flex max-h-[30rem] data-[open=true]:tanslate-y-0 *:data-[open=true]:opacity-100 data-[open=false]:translate-y-2 data-[open=false]:opacity-0 transition-all duration-300 w-full max-w-72 h-auto flex-col gap-1 p-2 rounded-lg border border-gray-200 bg-white shadow-sm "
    >
      <div className="flex justify-between p-2">
        <span>
          {headline && <h2 className="text-lg font-bold">{headline}</h2>}
        </span>

        <button onClick={onClose}>
          <Xmark />
        </button>
      </div>
      {children}
    </div>
  );
};

Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;

export default Popover;
