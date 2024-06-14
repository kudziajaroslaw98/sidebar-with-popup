import { fireEvent, render, screen } from '@testing-library/react';
import Input from './input';

describe('Input', () => {
  it('renders the input element', () => {
    // SETUP
    render(<Input />);

    const inputElement = screen.getByTestId('input');
    const searchIcon = screen.queryByTestId('input-search-icon');
    const clearButton = screen.queryByTestId('input-close-icon');

    // THEN
    expect(inputElement).toBeDefined();
    expect(searchIcon).toBeFalsy();
    expect(clearButton).toBeFalsy();
  });

  it('renders the search icon', () => {
    // SETUP
    render(<Input showSearchIcon />);

    // THEN
    const searchIcon = screen.getByTestId('input-search-icon');

    expect(searchIcon).toBeDefined();
  });

  it('renders the clear button', () => {
    // SETUP
    render(
      <Input
        showClearButton
        isSearching
      />
    );

    // THEN
    const clearButton = screen.getByTestId('input-close-icon');

    expect(clearButton).toBeDefined();
  });

  it('calls onInputClear when the clear button is clicked', () => {
    // SETUP
    const onInputClearMock = jest.fn();

    render(
      <Input
        onInputClear={onInputClearMock}
        showClearButton={true}
        isSearching={true}
      />
    );

    // GIVEN
    const clearButton = screen.getByTestId('input-close-icon');

    expect(onInputClearMock).toHaveBeenCalledTimes(0);

    //WHEN
    fireEvent.click(clearButton);

    //THEN
    expect(onInputClearMock).toHaveBeenCalledTimes(1);
  });

  it('correctly emits onChange', () => {
    // SETUP
    const onChangeMock = jest.fn();

    render(
      <Input
        value='abc'
        onChange={onChangeMock}
      />
    );

    // GIVEN
    const input = screen.getByTestId('input') as HTMLInputElement;

    expect(input.value).toBe('abc');

    //WHEN
    fireEvent.change(input, { target: { value: 'test' } });

    //THEN
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
