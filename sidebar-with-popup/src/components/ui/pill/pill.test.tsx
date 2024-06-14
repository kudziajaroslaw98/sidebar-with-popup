import { fireEvent, render, screen } from "@testing-library/react";
import Pill from "./pill";

describe("Pill Component", () => {
  it("renders text correctly", () => {
    // SETUP
    render(<Pill text="Example Text" />);

    // THEN
    const pill = screen.getByTestId("pill");
    const pillText = screen.getByTestId("pill-text");

    expect(pill).toBeDefined();
    expect(pillText.textContent).toBe("Example Text");
  });

  it("correctly doesnt render close button", () => {
    // SETUP
    render(<Pill text="Example Text" closeable={false} />);

    // THEN
    const closeIcon = screen.queryByTestId("pill-close-icon");

    expect(closeIcon).toBeNull();
  });

  it("correctly render close button", () => {
    // SETUP
    render(<Pill text="Example Text" />);

    // THEN
    const closeIcon = screen.getByTestId("pill-close-icon");

    expect(closeIcon).toBeDefined();
  });

  it("correctly emits close event", () => {
    // SETUP
    const onCloseMock = jest.fn();

    render(<Pill text="Example Text" onClose={onCloseMock} />);

    // THEN
    const closeIcon = screen.getByTestId("pill-close-icon");

    expect(closeIcon).toBeDefined();
    expect(onCloseMock).toHaveBeenCalledTimes(0);

    // WHEN
    fireEvent.click(closeIcon);

    // THEN
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
