import { cn } from '../../../utils/cn';
import type { ReactNode } from 'react';

const PopoverFooter = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('border-t border-gray-100 p-2', className)}>{children}</div>;
};

export default PopoverFooter;
