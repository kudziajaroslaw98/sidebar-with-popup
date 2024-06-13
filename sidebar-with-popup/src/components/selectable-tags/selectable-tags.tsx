import { Check } from "iconoir-react";
import type { Tag } from "../../App";
import SelectableList from "../ui/selectable-list/selectable-list";

const SelectableTags = ({
  tags,
  pickedTags,
  onChange,
}: {
  tags: Tag[];
  pickedTags: Tag[];
  onChange: (...args: Tag[]) => void;
}) => {
  return (
    <SelectableList
      items={tags}
      keyBy="id"
      selectedItems={pickedTags}
      onChange={onChange}
      render={(item) => (
        <div className="w-full flex justify-between px-2 py-1 gap-2">
          <div className="flex items-center gap-3 w-full">
            <span className="size-5 group-[.selected]:bg-blue-700 bg-gray-100 border border-gray-200 rounded-md flex justify-center items-center">
              <Check className="hidden group-[.selected]:flex text-gray-400 group-[.selected]:text-white size-4" />
            </span>

            <span className="text-ellipsis w-full max-w-36 text-sm whitespace-nowrap overflow-clip">
              {item.name}
            </span>
          </div>

          <span className="flex text-gray-400 text-sm ">{`+${item.usages}`}</span>
        </div>
      )}
    ></SelectableList>
  );
};

export default SelectableTags;
