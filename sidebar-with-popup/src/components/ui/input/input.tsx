import { Search, XmarkCircleSolid } from 'iconoir-react';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isSearching?: boolean;
  onInputClear?: () => void;
  showClearButton?: boolean;
  showSearchIcon?: boolean;
}

const Input = ({
  isSearching,
  onInputClear,
  showClearButton = false,
  showSearchIcon = false,
  ...props
}: InputProps) => {
  return (
    <label className='flex items-center justify-center gap-2'>
      {showSearchIcon && (
        <Search
          data-testid='input-search-icon'
          className='size-5 text-gray-500'
        />
      )}

      <input
        data-testid='input'
        className='w-full px-2 py-1 font-medium placeholder:text-sm'
        {...props}
      />

      {showClearButton && (
        <div className='size-5'>
          {isSearching && (
            <XmarkCircleSolid
              role='button'
              data-testid='input-close-icon'
              className='size-4 cursor-pointer text-gray-400'
              onClick={onInputClear}
            />
          )}
        </div>
      )}
    </label>
  );
};

export default Input;
