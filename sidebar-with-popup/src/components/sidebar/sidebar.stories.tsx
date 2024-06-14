import {
  ChatBubbleEmpty,
  Hashtag,
  InfoCircle,
  LogOut,
  Settings,
} from "iconoir-react";
import SideBar from "./sidebar";

export default {
  title: "Components/Sidebar",
  component: SideBar,
  tags: ["autodocs"],
};

export const SidebarExample = {
  args: {
    items: [
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
          <Settings
            data-testid={"sidebar-item-icon"}
            className="text-gray-600"
          />
        ),
        name: "Opcje",
        shortcut: "Ctrl+O",
      },
      {
        icon: (
          <Hashtag
            data-testid={"sidebar-item-icon"}
            className="text-gray-600"
          />
        ),
        name: "Dodawanie Tagów",
        shortcut: "Ctrl+T",
      },
      {
        icon: (
          <LogOut data-testid={"sidebar-item-icon"} className="text-gray-600" />
        ),
        name: "Wyloguj",
      },
    ],
  },
};
