import {
  ChatBubbleEmpty,
  Hashtag,
  InfoCircle,
  LogOut,
  Settings,
} from "iconoir-react";
import { useState } from "react";
import SideBar from "./components/sidebar/sidebar";
import TagsPopover from "./components/tags-popover/tags-popover";

export interface Tag {
  name: string;
  usages: number;
  id: number;
}

function App() {
  const [popoverOpen, setPopoverOpen] = useState(false);

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

  return (
    <div className="flex bg-gray-50 w-full h-full justify-center items-start gap-3">
      <SideBar items={sidebarItems} />

      <TagsPopover open={popoverOpen} onClose={() => setPopoverOpen(false)} />
    </div>
  );
}

export default App;
