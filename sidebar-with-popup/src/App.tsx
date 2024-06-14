import { ChatBubbleEmpty, Hashtag, InfoCircle, LogOut, Settings } from 'iconoir-react';
import TagsPopover from './components/tags-popover/tags-popover';
import SideBar from './components/sidebar/sidebar';
import { useState } from 'react';

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
          data-testid={'sidebar-item-icon'}
          className='text-gray-600'
        />
      ),
      name: 'Informacje',
      shortcut: 'Ctrl+I'
    },
    {
      icon: (
        <ChatBubbleEmpty
          data-testid={'sidebar-item-icon'}
          className='text-gray-600'
        />
      ),
      name: 'Chat',
      shortcut: 'Ctrl+H'
    },
    {
      icon: (
        <Settings
          data-testid={'sidebar-item-icon'}
          className='text-gray-600'
        />
      ),
      name: 'Opcje',
      shortcut: 'Ctrl+O'
    },
    {
      icon: (
        <Hashtag
          data-testid={'sidebar-item-icon'}
          className='text-gray-600'
        />
      ),
      name: 'Dodawanie Tagów',
      shortcut: 'Ctrl+T',
      onClick: () => setPopoverOpen(true)
    },
    {
      icon: (
        <LogOut
          data-testid={'sidebar-item-icon'}
          className='text-gray-600'
        />
      ),
      name: 'Wyloguj'
    }
  ];

  return (
    <div className='flex h-full w-full items-start justify-center gap-3 bg-gray-50'>
      <SideBar items={sidebarItems} />

      <TagsPopover
        open={popoverOpen}
        onClose={() => setPopoverOpen(false)}
      />
    </div>
  );
}

export default App;
