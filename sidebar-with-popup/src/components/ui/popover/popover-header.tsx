import type { ReactNode } from 'react';

const PopoverHeader = ({ children }: { children: ReactNode }) => {
  return <div className='border-b border-gray-100 p-2'>{children}</div>;
};

export default PopoverHeader;
