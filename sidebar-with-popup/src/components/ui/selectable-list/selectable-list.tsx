import isInArrayByKey from '../../../utils/is-in-array-by-key';
import { cn } from '../../../utils/cn';

interface SelectableListProps<T> {
  className?: string;
  items: T[];
  selectedItems: T[];
  keyBy: keyof T;
  onChange: (...args: T[]) => void;
  render: (item: T) => React.ReactNode;
}

function SelectableList<T>({
  items,
  selectedItems,
  onChange,
  keyBy,
  render
}: SelectableListProps<T>) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item[keyBy] as string}
          tabIndex={0}
          aria-selected={isInArrayByKey(selectedItems, item, keyBy)}
          data-testid='selectable-list-item'
          className={cn([
            'flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-transparent hover:bg-gray-100',
            isInArrayByKey(selectedItems, item, keyBy) && 'selected group border-blue-700'
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
