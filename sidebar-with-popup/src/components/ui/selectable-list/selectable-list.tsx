import { cn } from "../../../utils/cn";
import isInArrayByKey from "../../../utils/is-in-array-by-key";

interface SelectableListProps<T> {
  className?: string;
  items: T[];
  selectedItems: T[];
  keyBy: keyof T;
  textByKey: keyof T;
  onChange: (...args: T[]) => void;
  render: (item: T) => React.ReactNode;
}

function SelectableList<T>({
  items,
  selectedItems,
  onChange,
  keyBy,
  textByKey,
  render,
}: SelectableListProps<T>) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item[keyBy] as string}
          role="button"
          className={cn([
            "flex justify-between items-center w-full border gap-2 border-transparent hover:bg-gray-100 rounded-md cursor-pointer",
            isInArrayByKey(selectedItems, item, keyBy) &&
              "group selected border-blue-700",
          ])}
          onClick={() => onChange(item)}
        >
          {render(item)}
        </div>
      ))}
    </>
  );
}

export default SelectableList;
