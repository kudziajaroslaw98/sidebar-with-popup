import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "../../../output.css";
import Tooltip from "./tooltip";

describe("Tooltip", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    // SETUP
    render(<Tooltip name="Load Greeting" shortcut="⌘L" />);

    // GIVEN
    expect(screen.getByTestId("tooltip-wrapper")).toBeInTheDocument();
  });

  it("should have correct content", async () => {
    // SETUP
    const { rerender } = render(<Tooltip name="Informacje" shortcut="⌘I" />);

    // GIVEN
    expect(screen.getByTestId("tooltip-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-name")).toHaveTextContent("Informacje");
    expect(screen.getByTestId("tooltip-shortcut")).toHaveTextContent("⌘I");

    rerender(<Tooltip name="Tagi" shortcut="⌘T" />);

    expect(screen.getByTestId("tooltip-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-name")).toHaveTextContent("Tagi");
    expect(screen.getByTestId("tooltip-shortcut")).toHaveTextContent("⌘T");
  });
});
