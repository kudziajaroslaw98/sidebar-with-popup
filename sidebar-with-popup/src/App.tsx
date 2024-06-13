import {
  ChatBubbleEmpty,
  Hashtag,
  InfoCircle,
  LogOut,
  Settings,
} from "iconoir-react";
import { useMemo, useState } from "react";
import CmsAiSection from "./components/cms-ai-section.tsx/cms-ai-section";
import Divider from "./components/divider/divider";
import PillList from "./components/pill-list/pill-list";
import Popover from "./components/popover/popover";
import SideBar from "./components/sidebar/sidebar";
import StrengthIndicator from "./components/strength-indicator/strength-indicator";
import Input from "./components/ui/input/input";

interface Tag {
  name: string;
  usages: number;
  id: number;
}

function App() {
  const [search, setSearch] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const isSearching = useMemo(() => {
    return search !== "";
  }, [search]);

  const sidebarItems = [
    {
      icon: (
        <InfoCircle
          data-testid={"sidebar-item-icon"}
          className="text-gray-600"
        />
      ),
      name: "Informacje",
      shortcut: "Ctrl+I",
    },
    {
      icon: (
        <ChatBubbleEmpty
          data-testid={"sidebar-item-icon"}
          className="text-gray-600"
        />
      ),
      name: "Chat",
      shortcut: "Ctrl+H",
    },
    {
      icon: (
        <Settings data-testid={"sidebar-item-icon"} className="text-gray-600" />
      ),
      name: "Opcje",
      shortcut: "Ctrl+O",
    },
    {
      icon: (
        <Hashtag data-testid={"sidebar-item-icon"} className="text-gray-600" />
      ),
      name: "Dodawanie Tagów",
      shortcut: "Ctrl+T",
      onClick: () => setPopoverOpen(true),
    },
    {
      icon: (
        <LogOut data-testid={"sidebar-item-icon"} className="text-gray-600" />
      ),
      name: "Wyloguj",
    },
  ];
  const [tags, setTags] = useState<Tag[]>([
    {
      id: 4,
      name: "Maryla Rodowicz",
      usages: 40,
    },
    {
      id: 5,
      name: "Odmrażanie trupa",
      usages: 35,
    },
    {
      id: 6,
      name: "Festival w Opolu",
      usages: 32,
    },
    {
      id: 7,
      name: "Legendy polskiej sceny muzycznej",
      usages: 30,
    },
    {
      id: 8,
      name: "Przeboje lat 70",
      usages: 26,
    },
    {
      id: 9,
      name: "Ikonka popkultury",
      usages: 25,
    },
    {
      id: 10,
      name: "Polska muzyka",
      usages: 17,
    },
    {
      id: 11,
      name: "Kabaret",
      usages: 12,
    },
  ]);

  const [pickedTags, setPickedTags] = useState<Tag[]>([
    {
      id: 1,
      name: "Gwiazda",
      usages: 40,
    },
    {
      id: 2,
      name: "Sejm",
      usages: 3,
    },
    {
      id: 3,
      name: "Mariusz Kamiński",
      usages: 2,
    },
  ]);

  const handleTagClose = (tag: Tag) => {
    setPickedTags((prevTags) =>
      prevTags.filter((filteredTag) => filteredTag.id !== tag.id)
    );
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const selectedItems = [2];

  return (
    <div className="flex bg-gray-50 w-full h-full justify-center items-start gap-3">
      <SideBar items={sidebarItems} />

      <Popover headline="Tagi" open={popoverOpen} onClose={handlePopoverClose}>
        <Popover.Header>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            isSearching={isSearching}
            placeholder="Wyszukaj grupę lub tag"
            onInputChange={setSearch}
            onInputClear={handleClearSearch}
          />
        </Popover.Header>

        <Popover.Body>
          {isSearching ? (
            <div className="p-1 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                {tags
                  .filter((tag) =>
                    tag.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .slice(0, 7)
                  .map((tag) => (
                    <div
                      key={tag.name}
                      role="button"
                      className="flex justify-between items-center gap-2 w-full hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer"
                      onClick={() =>
                        setPickedTags((prevTags) => [...prevTags, tag])
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span className="size-5 bg-gray-100 border border-gray-200 rounded-md"></span>

                        <span className="text-ellipsis w-44 text-sm whitespace-nowrap overflow-clip">
                          {tag.name}
                        </span>
                      </div>

                      <span className="text-gray-400 text-sm">
                        {`+${tag.usages}`}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <>
              <PillList
                items={pickedTags}
                textByKey="name"
                onClose={handleTagClose}
                emptyMessage="Puste, dodane tagi pojawią się tutaj"
              />

              <Divider />

              <CmsAiSection />
            </>
          )}
        </Popover.Body>

        <Popover.Footer className={isSearching ? "border-t-0" : ""}>
          {isSearching ? (
            <button
              onClick={() => setSearch("")}
              disabled={selectedItems.length === 0}
              className="w-full cursor-pointer transition focus:active:scale-95 hover:bg-blue-500 active:bg-blue-700 h-8 font-bold bg-blue-600 text-white rounded-md text-sm disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              Zapisz
            </button>
          ) : (
            <StrengthIndicator strength={pickedTags.length} />
          )}
        </Popover.Footer>
      </Popover>
    </div>
  );
}

export default App;
