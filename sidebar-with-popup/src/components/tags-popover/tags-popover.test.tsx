import { fireEvent, render, screen } from "@testing-library/react";
import TagsPopover from "./tags-popover";
import { dataProviderTags } from "./tags-popover.data-provider";

describe("TagsPopover", () => {
  const onPopoverClose = jest.fn();
  const tags = dataProviderTags;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should emit onPopoverClose when close button is clicked", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // THEN
    const closeButton = screen.getByTestId("popover-close-button");
    expect(onPopoverClose).toHaveBeenCalledTimes(0);

    // WHEN
    fireEvent.click(closeButton);

    // THEN
    expect(onPopoverClose).toHaveBeenCalledTimes(1);
  });

  it("should show tag 3 pills after adding 3 tags", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // THEN
    const emptyMessage = screen.queryByTestId("pill-list-empty-message");
    const searchInput = screen.getByTestId("input") as HTMLInputElement;

    expect(emptyMessage).toBeDefined();
    expect(emptyMessage?.textContent).toBe(
      "Puste, dodane tagi pojawią się tutaj"
    );
    expect(searchInput).toBeDefined();

    // WHEN
    fireEvent.change(searchInput, { target: { value: "a" } });

    // THEN
    const selectableListItems = screen.getAllByTestId("selectable-list-item");
    const saveButton = screen.getByTestId("save-button") as HTMLButtonElement;

    expect(saveButton).toBeDefined();
    expect(saveButton.disabled).toBeTruthy();
    expect(selectableListItems).toHaveLength(9);

    expect(selectableListItems[0].classList).not.toContain("selected");
    expect(selectableListItems[1].classList).not.toContain("selected");
    expect(selectableListItems[2].classList).not.toContain("selected");

    // WHEN
    fireEvent.click(selectableListItems[0]);
    fireEvent.click(selectableListItems[1]);
    fireEvent.click(selectableListItems[2]);

    // THEN
    expect(saveButton.disabled).toBeFalsy();
    expect(selectableListItems[0].classList).toContain("selected");
    expect(selectableListItems[1].classList).toContain("selected");
    expect(selectableListItems[2].classList).toContain("selected");

    // WHEN
    fireEvent.click(saveButton);

    // THEN
    const pills = screen.getAllByTestId("pill");

    expect(searchInput.value).toBe("");
    expect(pills).toHaveLength(3);
    expect(pills[0].textContent).toBe(tags[0].name);
    expect(pills[1].textContent).toBe(tags[2].name);
    expect(pills[2].textContent).toBe(tags[3].name);
  });

  it("should render filtered tags when searching", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // WHEN
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "Maryla" } });

    // THEN
    const selectableListItems = screen.getAllByTestId("selectable-list-item");
    const listItemTexts = screen.getAllByTestId("tag-name");

    expect(selectableListItems).toHaveLength(1);
    expect(listItemTexts).toHaveLength(1);
    expect(listItemTexts[0].textContent).toBe(tags[3].name);
  });

  it("should add tag to selected tags when clicked", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // THEN
    const searchInput = screen.getByTestId("input") as HTMLInputElement;

    expect(searchInput).toBeDefined();

    // WHEN
    fireEvent.change(searchInput, { target: { value: "a" } });

    // THEN
    const selectableListItems = screen.getAllByTestId("selectable-list-item");
    const saveButton = screen.getByTestId("save-button") as HTMLButtonElement;

    expect(saveButton).toBeDefined();
    expect(saveButton.disabled).toBeTruthy();
    expect(selectableListItems).toHaveLength(9);
    expect(selectableListItems[0].classList).not.toContain("selected");

    // WHEN
    fireEvent.click(selectableListItems[0]);

    // THEN
    expect(saveButton.disabled).toBeFalsy();
    expect(selectableListItems[0].classList).toContain("selected");
  });

  it("should remove tag from selected tags when clicked", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // WHEN
    const searchInput = screen.getByTestId("input") as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "a" } });

    // THEN
    const selectableListItems = screen.getAllByTestId("selectable-list-item");
    const saveButton = screen.getByTestId("save-button") as HTMLButtonElement;

    expect(saveButton).toBeDefined();
    expect(saveButton.disabled).toBeTruthy();
    expect(selectableListItems).toHaveLength(9);
    expect(selectableListItems[0].classList).not.toContain("selected");

    // WHEN
    fireEvent.click(selectableListItems[0]);

    // THEN
    expect(saveButton.disabled).toBeFalsy();
    expect(selectableListItems[0].classList).toContain("selected");

    // WHEN
    fireEvent.click(selectableListItems[0]);

    // THEN
    expect(saveButton.disabled).toBeTruthy();
    expect(selectableListItems[0].classList).not.toContain("selected");
  });

  it("should clear search input when clear button is clicked", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // WHEN
    const searchInput = screen.getByTestId("input") as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "a" } });

    // THEN
    const clearButton = screen.getByTestId("input-close-icon");

    expect(clearButton).toBeDefined();

    // WHEN
    fireEvent.click(clearButton);

    // THEN
    expect(searchInput.value).toBe("");
  });

  it("should remove tags by clicking xmark on them", () => {
    // SETUP
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    // THEN
    const searchInput = screen.getByTestId("input") as HTMLInputElement;

    expect(searchInput).toBeDefined();

    // WHEN
    fireEvent.change(searchInput, { target: { value: "a" } });

    // THEN
    const selectableListItems = screen.getAllByTestId("selectable-list-item");
    const saveButton = screen.getByTestId("save-button") as HTMLButtonElement;

    expect(saveButton).toBeDefined();
    expect(saveButton.disabled).toBeTruthy();
    expect(selectableListItems).toHaveLength(9);
    expect(selectableListItems[0].classList).not.toContain("selected");

    // WHEN
    fireEvent.click(selectableListItems[0]);

    // THEN
    expect(saveButton.disabled).toBeFalsy();
    expect(selectableListItems[0].classList).toContain("selected");

    // WHEN
    fireEvent.click(saveButton);

    // THEN
    const pills = screen.getAllByTestId("pill");
    const pillCloseIcons = screen.getAllByTestId("pill-close-icon");

    expect(pills).toHaveLength(1);
    expect(pillCloseIcons).toHaveLength(1);
    expect(pills[0].textContent).toBe("Gwiazda");

    // WHEN
    fireEvent.click(pillCloseIcons[0]);

    // THEN
    const emptyMessage = screen.queryByTestId("pill-list-empty-message");

    expect(emptyMessage).toBeDefined();
    expect(emptyMessage?.textContent).toBe(
      "Puste, dodane tagi pojawią się tutaj"
    );
  });
});
