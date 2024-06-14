import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

const tooltipVariants = cva(`after:size-3 after:absolute after:bg-gray-950`, {
  variants: {
    position: {
      left: 'right-14 bottom-0 after:rotate-45 after:-right-1 after:top-3',
      right: 'left-14 bottom-0 after:rotate-45 after:-left-1 after:top-3'
    }
  },
  defaultVariants: {
    position: 'left'
  }
});

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  name: string;
  shortcut: string;
}

export default function Tooltip({ name, shortcut, position = 'left' }: TooltipProps) {
  return (
    <div
      role='tooltip'
      data-testid='tooltip-wrapper'
      className={cn([
        'invisible absolute flex items-center justify-between gap-4 text-nowrap rounded-md bg-gray-950 px-4 py-2 text-sm text-gray-50 opacity-0 transition-all group-hover:visible group-hover:opacity-100',
        tooltipVariants({ position })
      ])}
    >
      <span data-testid='tooltip-name'>{name}</span>

      {shortcut && (
        <span
          data-testid='tooltip-shortcut'
          className='text-xs'
        >
          {shortcut}
        </span>
      )}
    </div>
  );
}
