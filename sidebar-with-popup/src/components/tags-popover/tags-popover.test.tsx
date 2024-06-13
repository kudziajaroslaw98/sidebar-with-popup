import { fireEvent, render, screen } from "@testing-library/react";
import TagsPopover from "./tags-popover";

describe("TagsPopover", () => {
  const tags = [
    { id: "tag1", name: "Tag 1", usages: 2 },
    { id: "tag2", name: "Tag 2", usages: 2 },
    { id: "tag3", name: "Tag 3", usages: 2 },
  ];

  const onPopoverClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render tags when not searching", () => {
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    tags.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
  });

  it("should render filtered tags when searching", () => {
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "tag2" } });

    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.queryByText("Tag 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Tag 3")).not.toBeInTheDocument();
  });

  it("should add tag to selected tags when clicked", () => {
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    const tag1 = screen.getByText("Tag 1");
    fireEvent.click(tag1);
  });

  it("should remove tag from selected tags when clicked", () => {
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    const tag1 = screen.getByText("Tag 1");
    fireEvent.click(tag1);
  });

  it("should clear search input when clear button is clicked", () => {
    render(<TagsPopover open={true} onClose={onPopoverClose} />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "tag2" } });

    const clearButton = screen.getByRole("button", { name: "Clear" });
    fireEvent.click(clearButton);
  });
});
