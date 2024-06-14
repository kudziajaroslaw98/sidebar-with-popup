import { fireEvent, render, screen } from "@testing-library/react";
import SelectableTags from "./selectable-tags";

describe("SelectableTags Component", () => {
  const tags = [
    { id: 1, name: "Tag1", usages: 2 },
    { id: 2, name: "Tag2", usages: 2 },
  ];
  const pickedTags = [{ id: 1, name: "Tag1", usages: 2 }];
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders SelectableTags component correctly", () => {
    // SETUP
    render(
      <SelectableTags tags={tags} pickedTags={pickedTags} onChange={onChange} />
    );

    // THEN
    const tagNames = screen.getAllByTestId("tag-name");
    const tagUsages = screen.getAllByTestId("tag-usages");

    expect(tagNames).toHaveLength(2);
    tagNames.forEach((tag, index) => {
      expect(tag).toBeDefined();
      expect(tag.textContent).toBe(tags[index].name);
      expect(tagUsages[index].textContent).toBe(`+${tags[index].usages}`);
    });
  });

  it("calls onChange when a tag is selected", () => {
    // SETUP
    render(
      <SelectableTags tags={tags} pickedTags={pickedTags} onChange={onChange} />
    );

    // THEN
    expect(onChange).toHaveBeenCalledTimes(0);

    // WHEN
    const selectableItems = screen.getAllByTestId("selectable-list-item");

    fireEvent.click(selectableItems[1]);

    // THEN
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(tags[1]);
  });
});
