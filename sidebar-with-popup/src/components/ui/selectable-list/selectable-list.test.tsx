import { fireEvent, render, screen } from "@testing-library/react";
import SelectableList from "./selectable-list";

describe("SelectableList", () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const selectedItems = [
    { id: 1, name: "Item 1" },
    { id: 3, name: "Item 3" },
  ];

  it("renders the list of items", () => {
    // SETUP
    const onSelectItem = jest.fn();

    render(
      <SelectableList
        items={items}
        selectedItems={selectedItems}
        keyBy="id"
        onChange={onSelectItem}
        render={(item) => (
          <div data-testid="selectable-list-render-item">{item.name}</div>
        )}
      />
    );

    // THEN
    const selectableItems = screen.getAllByTestId("selectable-list-item");
    const selectableRenderItems = screen.getAllByTestId(
      "selectable-list-render-item"
    );

    expect(selectableItems).toHaveLength(3);
    expect(selectableRenderItems).toHaveLength(3);
  });

  it("list of items should have correct text", () => {
    // SETUP
    const onSelectItem = jest.fn();

    render(
      <SelectableList
        items={items}
        selectedItems={selectedItems}
        keyBy="id"
        onChange={onSelectItem}
        render={(item) => (
          <div data-testid="selectable-list-render-item">{item.name}</div>
        )}
      />
    );

    // THEN
    const selectableRenderItems = screen.getAllByTestId(
      "selectable-list-render-item"
    );

    selectableRenderItems.forEach((item, index) => {
      expect(item.textContent).toBe(items[index].name);
    });
  });

  it("calls onSelectItem when an item is clicked", () => {
    // SETUP
    const onSelectItem = jest.fn();

    render(
      <SelectableList
        items={items}
        selectedItems={selectedItems}
        keyBy="id"
        onChange={onSelectItem}
        render={(item) => <div>{item.name}</div>}
      />
    );

    // THEN
    expect(onSelectItem).toHaveBeenCalledTimes(0);

    // WHEN
    const item = screen.getAllByTestId("selectable-list-item")[0];

    fireEvent.click(item);

    // THEN
    expect(onSelectItem).toHaveBeenCalledWith(items[0]);
    expect(onSelectItem).toHaveBeenCalledTimes(1);
  });

  it("correctly adding 'group' and 'selected' classes to selected items", () => {
    // SETUP
    const onSelectItem = jest.fn();

    render(
      <SelectableList
        items={items}
        selectedItems={selectedItems}
        keyBy="id"
        onChange={onSelectItem}
        render={(item) => <div>{item.name}</div>}
      />
    );

    // THEN
    const selectableItems = screen.getAllByTestId("selectable-list-item");

    expect(selectableItems[0].className).toContain("selected");
    expect(selectableItems[2].className).toContain("selected");
    expect(selectableItems[1].className).not.toContain("selected");
  });
});
