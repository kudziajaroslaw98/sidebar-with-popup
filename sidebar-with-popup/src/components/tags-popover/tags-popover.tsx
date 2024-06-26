import StrengthIndicator from '../strength-indicator/strength-indicator';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import SelectableTags from '../selectable-tags/selectable-tags';
import CmsAiSection from '../cms-ai-section/cms-ai-section';
import isInArrayByKey from '../../utils/is-in-array-by-key';
import areArraysEqual from '../../utils/are-arrays-equal';
import PillList from '../pill-list/pill-list';
import Divider from '../ui/divider/divider';
import Popover from '../ui/popover/popover';
import Input from '../ui/input/input';
import { Tag } from '../../App';

const TagsPopover = ({ open = false, onClose }: { open: boolean; onClose: () => void }) => {
  const [search, setSearch] = useState('');
  const isSearching = useMemo(() => {
    return search !== '';
  }, [search]);

  const tags = [
    {
      id: 1,
      name: 'Gwiazda',
      usages: 40
    },
    {
      id: 2,
      name: 'Sejm',
      usages: 3
    },
    {
      id: 3,
      name: 'Mariusz Kamiński',
      usages: 2
    },
    {
      id: 4,
      name: 'Maryla Rodowicz',
      usages: 40
    },
    {
      id: 5,
      name: 'Odmrażanie trupa',
      usages: 35
    },
    {
      id: 6,
      name: 'Festival w Opolu',
      usages: 32
    },
    {
      id: 7,
      name: 'Legendy polskiej sceny muzycznej',
      usages: 30
    },
    {
      id: 8,
      name: 'Przeboje lat 70',
      usages: 26
    },
    {
      id: 9,
      name: 'Ikonka popkultury',
      usages: 25
    },
    {
      id: 10,
      name: 'Polska muzyka',
      usages: 17
    },
    {
      id: 11,
      name: 'Kabaret',
      usages: 12
    }
  ];

  const [savedTags, setSavedTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);

  const handleTagClose = (tag: Tag) => {
    setSavedTags((prevTags) => prevTags.filter((filteredTag) => filteredTag.id !== tag.id));

    setSelectedTags((prevTags) => prevTags.filter((filteredTag) => filteredTag.id !== tag.id));
  };

  const handleClearSearch = () => {
    setSearch('');
    setFilteredTags([]);
  };

  const filterPickedTags = (searchText: string) => {
    setFilteredTags(
      tags.filter((tag) => tag.name.toLowerCase().includes(searchText.toLowerCase()))
    );
  };

  const handleChangeSelectedTags = (tag: Tag) => {
    if (!isInArrayByKey(selectedTags, tag, 'id')) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    } else {
      handleTagClose(tag);
    }
  };

  useEffect(() => {
    filterPickedTags(search);
  }, [search]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    setSearch(searchText);
  };

  const handleSaveTags = () => {
    setSavedTags(selectedTags);
    setSearch('');
  };

  return (
    <Popover
      headline='Tagi'
      open={open}
      onClose={onClose}
    >
      <Popover.Header>
        <Input
          type='text'
          value={search}
          onChange={handleSearchChange}
          isSearching={isSearching}
          placeholder='Wyszukaj grupę lub tag'
          onInputClear={handleClearSearch}
          showClearButton={true}
          showSearchIcon={true}
        />
      </Popover.Header>

      <Popover.Body>
        {isSearching ? (
          <div className='flex flex-col gap-2 overflow-y-auto overflow-x-hidden p-1'>
            <SelectableTags
              tags={isSearching ? filteredTags : tags}
              pickedTags={selectedTags}
              onChange={handleChangeSelectedTags}
            />
          </div>
        ) : (
          <>
            <div className='m-1 overflow-y-auto'>
              <PillList
                items={savedTags}
                textByKey='name'
                onClose={handleTagClose}
                emptyMessage='Puste, dodane tagi pojawią się tutaj'
              />
            </div>

            <Divider />

            <CmsAiSection />
          </>
        )}
      </Popover.Body>

      <Popover.Footer className={isSearching ? 'border-t-0' : ''}>
        {isSearching ? (
          <button
            onClick={handleSaveTags}
            disabled={areArraysEqual(savedTags, selectedTags, 'id')}
            data-testid='save-button'
            className='h-8 w-full cursor-pointer rounded-md bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-500 active:bg-blue-700 focus:active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300'
          >
            Zapisz
          </button>
        ) : (
          <StrengthIndicator strength={savedTags.length} />
        )}
      </Popover.Footer>
    </Popover>
  );
};
export default TagsPopover;
