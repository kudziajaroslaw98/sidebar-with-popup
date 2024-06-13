import { ReactNode } from "react";
import Tooltip from "../tooltip/tooltip";

interface SideBarItem {
  icon: ReactNode;
  name: string;
  shortcut?: string;
  onClick?: () => void;
}

interface SideBarProps {
  items: SideBarItem[];
}

export default function SideBar({ items }: SideBarProps) {
  return (
    <aside
      data-testid="sidebar"
      className="flex flex-col gap-2 p-1 rounded-lg border border-gray-200 bg-white shadow-sm h-auto"
    >
      {items.map((item) => (
        <button
          data-testid={"sidebar-item"}
          key={item.name}
          className="size-9 group relative flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
          onClick={() => item.onClick && item.onClick()}
        >
          {item.icon}
          <Tooltip name={item.name} shortcut={item.shortcut ?? ""} />
        </button>
      ))}
    </aside>
  );
}
