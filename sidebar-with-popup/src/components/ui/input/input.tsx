import { Search, XmarkCircleSolid } from "iconoir-react";
import { InputHTMLAttributes } from "react";

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
    <label className="flex items-center justify-center gap-2">
      {showSearchIcon && (
        <Search data-testid="search-icon" className="text-gray-500 size-5" />
      )}

      <input
        data-testid="input"
        className="w-full placeholder:text-sm px-2 py-1 font-medium"
        {...props}
      />

      {showClearButton && (
        <div className="size-5">
          {isSearching && (
            <XmarkCircleSolid
              role="button"
              data-testid="close-icon"
              className="text-gray-400 size-4 cursor-pointer"
              onClick={onInputClear}
            />
          )}
        </div>
      )}
    </label>
  );
};

export default Input;
