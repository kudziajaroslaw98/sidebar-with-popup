import Pill from "../ui/pill/pill";

interface PillListProps<T> {
  items: T[];
  textByKey: keyof T;
  onClose: (item: T) => void;
  emptyMessage?: string;
}

export default function PillList<T>({
  items,
  textByKey,
  onClose,
  emptyMessage,
}: PillListProps<T>) {
  return (
    <div className="w-full flex flex-wrap gap-1">
      {items.length > 0 &&
        items.map((item) => (
          <Pill
            key={item[textByKey] as string}
            text={item[textByKey] as string}
            onClose={() => onClose(item)}
          />
        ))}

      <span
        data-testid="empty-message"
        className="w-full flex justify-center items-center text-sm text-gray-400"
      >
        {items.length === 0 && emptyMessage}
      </span>
    </div>
  );
}
