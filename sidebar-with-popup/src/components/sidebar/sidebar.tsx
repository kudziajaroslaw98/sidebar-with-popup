import Tooltip from '../ui/tooltip/tooltip';
import { ReactNode } from 'react';

export interface SideBarItem {
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
      data-testid='sidebar'
      className='flex h-auto w-auto flex-col gap-2 rounded-lg border border-gray-200 bg-white p-1 shadow-sm'
    >
      {items.map((item) => (
        <button
          data-testid='sidebar-item'
          key={item.name}
          className='group relative flex size-9 items-center rounded-md p-2 hover:bg-gray-100'
          onClick={() => item.onClick && item.onClick()}
        >
          <span
            data-testid='sidebar-item-icon'
            className='flex h-full w-full items-center justify-center'
          >
            {item.icon}
          </span>

          <Tooltip
            name={item.name}
            shortcut={item.shortcut ?? ''}
          />
        </button>
      ))}
    </aside>
  );
}
