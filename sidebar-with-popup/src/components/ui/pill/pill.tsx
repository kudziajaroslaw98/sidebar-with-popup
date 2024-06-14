import { Xmark } from 'iconoir-react';

const Pill = ({
  text,
  closeable = true,
  onClose
}: {
  text: string;
  closeable?: boolean;
  onClose?: (...args: any[]) => void;
}) => {
  return (
    <span
      data-testid='pill'
      className='flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-2 py-1 text-sm font-bold text-gray-700'
    >
      <span data-testid='pill-text'>{text}</span>
      {closeable && (
        <Xmark
          role='button'
          data-testid='pill-close-icon'
          className='cursor-pointer text-gray-400'
          tabIndex={0}
          onClick={onClose}
        />
      )}
    </span>
  );
};

export default Pill;
