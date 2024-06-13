import { render, screen, fireEvent } from "@testing-library/react";
import PillList from "./pill-list";

describe("PillList", () => {
  const mockItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the list of items", () => {
    render(
      <PillList items={mockItems} textByKey="name" onClose={mockOnClose} />
    );

    mockItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it("calls onClose when a pill is clicked", () => {
    render(
      <PillList items={mockItems} textByKey="name" onClose={mockOnClose} />
    );

    const firstPill = screen.getByText(mockItems[0].name);
    fireEvent.click(firstPill);

    expect(mockOnClose).toHaveBeenCalledWith(mockItems[0]);
  });

  it("renders empty message when items are empty", () => {
    render(
      <PillList
        items={[]}
        textByKey="name"
        onClose={mockOnClose}
        emptyMessage="No items"
      />
    );

    expect(screen.getByText("No items")).toBeInTheDocument();
  });
});
