import { fireEvent, render, screen } from "@testing-library/react";
import PillList from "./pill-list";

describe("PillList", () => {
  const mockItems = [
    { id: 1, name: "Item 1", text: "Text 1" },
    { id: 2, name: "Item 2", text: "Text 2" },
  ];

  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the list of items", () => {
    // SETUP
    render(
      <PillList items={mockItems} textByKey="name" onClose={mockOnClose} />
    );

    // THEN
    const pills = screen.getAllByTestId("pill");

    expect(pills).toHaveLength(mockItems.length);
    mockItems.forEach((_, index) => {
      expect(pills[index].textContent).toBe(mockItems[index].name);
    });
  });

  it("calls onClose when a pill is clicked", () => {
    // SETUP
    render(
      <PillList items={mockItems} textByKey="name" onClose={mockOnClose} />
    );

    // THEN
    const firstPillCloseIcon = screen.getAllByTestId("close-icon")[0];
    expect(firstPillCloseIcon).toBeDefined();
    expect(mockOnClose).toHaveBeenCalledTimes(0);

    // WHEN
    fireEvent.click(firstPillCloseIcon);

    // THEN
    expect(mockOnClose).toHaveBeenCalledWith(mockItems[0]);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders empty message when items are empty", () => {
    // SETUP
    render(
      <PillList
        items={[]}
        textByKey="name"
        onClose={mockOnClose}
        emptyMessage="No items"
      />
    );

    // THEN
    const emptyMessage = screen.getByTestId("empty-message");

    expect(emptyMessage).toBeDefined();
    expect(emptyMessage.textContent).toBe("No items");
  });

  it("change pill texts when textByKey is changed", () => {
    // SETUP
    const { rerender } = render(
      <PillList items={mockItems} textByKey="name" onClose={mockOnClose} />
    );

    // THEN
    let pills = screen.getAllByTestId("pill");

    expect(pills).toHaveLength(mockItems.length);
    mockItems.forEach((_, index) => {
      expect(pills[index].textContent).toBe(mockItems[index].name);
    });

    // WHEN
    rerender(
      <PillList items={mockItems} textByKey="text" onClose={mockOnClose} />
    );

    // THEN
    pills = screen.getAllByTestId("pill");

    expect(pills).toHaveLength(mockItems.length);
    mockItems.forEach((_, index) => {
      expect(pills[index].textContent).toBe(mockItems[index].text);
    });
  });
});
