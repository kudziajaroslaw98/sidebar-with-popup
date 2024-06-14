import PopoverFooter from './popover-footer';
import PopoverHeader from './popover-header';
import PopoverBody from './popover-body';
import { Xmark } from 'iconoir-react';

interface PopoverProps {
  headline?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popover = ({ headline, open, onClose, children }: PopoverProps) => {
  return (
    <div
      data-testid='popover'
      data-open={open}
      className='data-[open=true]:tanslate-y-0 flex h-auto max-h-[30rem] w-full max-w-72 flex-col gap-1 rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 data-[open=false]:translate-y-2 data-[open=false]:opacity-0 *:data-[open=true]:opacity-100'
    >
      <div className='flex justify-between p-2'>
        <span>
          {headline && (
            <h2
              className='text-lg font-bold'
              data-testid='popover-headline'
            >
              {headline}
            </h2>
          )}
        </span>

        <button
          data-testid='popover-close-button'
          onClick={onClose}
        >
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
