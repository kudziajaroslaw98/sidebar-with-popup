import SelectableList from '../ui/selectable-list/selectable-list';
import { Check } from 'iconoir-react';
import type { Tag } from '../../App';

const SelectableTags = ({
  tags = [],
  pickedTags = [],
  onChange
}: {
  tags: Tag[];
  pickedTags: Tag[];
  onChange: (...args: Tag[]) => void;
}) => {
  return (
    <SelectableList
      items={tags}
      keyBy='id'
      selectedItems={pickedTags}
      onChange={onChange}
      render={(item) => (
        <div className='flex w-full justify-between gap-2 px-2 py-1'>
          <div className='flex w-full items-center gap-3'>
            <span className='flex size-5 items-center justify-center rounded-md border border-gray-200 bg-gray-100 group-[.selected]:bg-blue-700'>
              <Check className='hidden size-4 text-gray-400 group-[.selected]:flex group-[.selected]:text-white' />
            </span>

            <span
              data-testid='tag-name'
              className='w-full max-w-36 overflow-clip text-ellipsis whitespace-nowrap text-sm'
            >
              {item.name}
            </span>
          </div>

          <span
            data-testid='tag-usages'
            className='flex text-sm text-gray-400'
          >{`+${item.usages}`}</span>
        </div>
      )}
    ></SelectableList>
  );
};

export default SelectableTags;
