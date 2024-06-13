import { render, screen } from "@testing-library/react";
import SelectableTags from "./selectable-tags";

describe("SelectableTags Component", () => {
  const tags = [
    { id: 1, name: "Tag1", usages: 2 },
    { id: 2, name: "Tag2", usages: 2 },
  ];
  const pickedTags = [{ id: 1, name: "Tag1", usages: 2 }];
  const onChange = jest.fn();

  it("renders SelectableTags component correctly", () => {
    render(
      <SelectableTags tags={tags} pickedTags={pickedTags} onChange={onChange} />
    );

    // Add your assertions here to check if the component renders correctly
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.getByText("Tag2")).toBeInTheDocument();
    // Add more assertions as needed
  });

  it("calls onChange when a tag is selected", () => {
    render(
      <SelectableTags tags={tags} pickedTags={pickedTags} onChange={onChange} />
    );

    // Simulate a user selecting a tag
    // Add your code here to simulate the selection

    // Check if the onChange function is called with the correct arguments
    // Add your assertion here to check if onChange function is called
    expect(
      onChange
    ).toHaveBeenCalledWith(/* Add your expected arguments here */);
  });

  // Add more test cases as needed
});
