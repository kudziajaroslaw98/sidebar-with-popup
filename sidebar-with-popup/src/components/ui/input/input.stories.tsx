import Input from './input';

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    showSearchIcon: {
      name: 'showSearchIcon',
      control: 'boolean',
      defaultValue: false
    },
    isSearching: {
      name: 'isSearching',
      control: 'boolean',
      defaultValue: false
    },
    showClearButton: {
      name: 'showClearButton',
      description: 'Is visible only when "isSearching" is true',
      control: 'boolean',
      defaultValue: false
    }
  }
};

export const Text = {
  args: {
    placeholder: 'Wyszukaj grupę lub tag'
  }
};

export const WithSearchIcon = {
  args: {
    showSearchIcon: true,
    placeholder: 'Wyszukaj grupę lub tag'
  }
};

export const WithSearchAndClearIcon = {
  args: {
    showSearchIcon: true,
    showClearButton: true,
    isSearching: true,
    placeholder: 'Wyszukaj grupę lub tag'
  }
};
