import StrengthIndicator from './strength-indicator';

export default {
  title: 'Components/Strength Indicator',
  component: StrengthIndicator,
  tags: ['autodocs'],
  render: (args: any) => (
    <div className='w-80'>
      <StrengthIndicator {...args} />
    </div>
  )
};

export const StrengthIndicatorZero = {
  args: {
    strength: 0
  }
};

export const StrengthIndicatorOne = {
  args: {
    strength: 1
  }
};

export const StrengthIndicatorTwo = {
  args: {
    strength: 2
  }
};

export const StrengthIndicatorThree = {
  args: {
    strength: 3
  }
};

export const StrengthIndicatorFour = {
  args: {
    strength: 4
  }
};

export const StrengthIndicatorFive = {
  args: {
    strength: 5
  }
};

export const StrengthIndicatorAboveFive = {
  args: {
    strength: 10
  }
};
