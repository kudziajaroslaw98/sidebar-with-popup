import { CheckCircleSolid, InfoCircleSolid } from 'iconoir-react';
import StrengthBar from '../ui/strength-bar/strength-bar';

const StrengthIndicator = ({ strength }: { strength: number }) => {
  return (
    <div
      data-testid='strength-indicator'
      className='flex flex-col gap-2'
    >
      <StrengthBar value={strength} />

      <div className='flex items-center gap-2'>
        {strength < 5 ? (
          <>
            <InfoCircleSolid
              data-testid='strength-icon'
              className='size-4 min-w-4 text-gray-400'
            />
            <p
              data-testid='strength-message'
              className='text-xs font-medium text-gray-500'
            >{`Zbyt mało tagów. Dodaj jeszcze ${5 - strength} aby poprawić widoczność artykułu`}</p>
          </>
        ) : (
          <>
            <CheckCircleSolid
              data-testid='strength-icon'
              className='size-4 min-w-4 text-green-500'
            />
            <p
              data-testid='strength-message'
              className='text-xs font-medium text-green-500'
            >{`Wystarczającą liczba tagów została dodana`}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StrengthIndicator;
