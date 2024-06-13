import { fireEvent, render, screen } from "@testing-library/react";
import Popover from "./popover";

describe("Popover", () => {
  it("renders the headline", () => {
    // SETUP
    render(
      <Popover
        headline="Test Headline"
        open={true}
        onClose={() => {}}
        children="Test Content"
      />
    );

    // THEN
    const headline = screen.getByTestId("popover-headline");

    expect(headline).toBeDefined();
    expect(headline.textContent).toBe("Test Headline");
  });

  it("calls onClose when the close button is clicked", () => {
    // SETUP
    const onCloseMock = jest.fn();

    render(
      <Popover
        headline="Test Headline"
        open={true}
        onClose={onCloseMock}
        children="Test Content"
      />
    );

    // THEN
    expect(onCloseMock).toHaveBeenCalledTimes(0);

    // WHEN
    const closeButton = screen.getByTestId("popover-close-button");

    fireEvent.click(closeButton);

    // THEN
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("renders the children", () => {
    // SETUP
    render(
      <Popover headline="Test Headline" open={true} onClose={() => {}}>
        <span data-testid="popover-children">Test Content</span>
      </Popover>
    );

    // THEN
    const children = screen.getByTestId("popover-children");

    expect(children).toBeDefined();
    expect(children.textContent).toBe("Test Content");
  });

  it("correctly change data-open", () => {
    // SETUP
    const { rerender } = render(
      <Popover
        headline="Test Headline"
        open={true}
        onClose={() => {}}
        children="Test Content"
      />
    );

    // THEN
    const popover = screen.getByTestId("popover");

    expect(popover).toBeDefined();
    expect(popover.dataset.open).toBe("true");

    // WHEN
    rerender(
      <Popover
        headline="Test Headline"
        open={false}
        onClose={() => {}}
        children="Test Content"
      />
    );

    // THEN
    expect(popover).toBeDefined();
    expect(popover.dataset.open).toBe("false");
  });
});
