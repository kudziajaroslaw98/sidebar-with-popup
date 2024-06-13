import { render, screen } from "@testing-library/react";
import StrengthBar from "./strength-bar";

describe("StrengthBar", () => {
  test("renders the correct strength text and color", () => {
    // SETUP
    const strength = 2;
    render(<StrengthBar value={strength} />);

    // THEN
    const strengthText = screen.getByTestId("strength-text");

    expect(strengthText).toBeDefined();
    expect(strengthText.textContent).toBe("Słabo");
    expect(strengthText.className).toContain("text-orange-500");
  });

  test("renders the correct strength text and color for different values", () => {
    // SETUP
    const { rerender } = render(<StrengthBar value={0} />);

    // THEN
    const strengthText = screen.getByTestId("strength-text");

    expect(strengthText).toBeDefined();
    expect(strengthText.className).toContain("text-red-500");
    expect(strengthText.textContent).toBe("Bardzo słabo");

    // WHEN
    rerender(<StrengthBar value={4} />);

    // THEN
    expect(strengthText).toBeDefined();
    expect(strengthText.className).toContain("text-teal-500");
    expect(strengthText.textContent).toBe("Dobrze");

    // WHEN
    rerender(<StrengthBar value={5} />);

    // THEN
    expect(strengthText).toBeDefined();
    expect(strengthText.className).toContain("text-green-500");
    expect(strengthText.textContent).toBe("Bardzo dobrze");
  });

  test("renders the correct number of filled bars", () => {
    // SETUP
    let strength = 2;
    const { rerender } = render(<StrengthBar value={strength} />);

    // THEN
    const strengthBar = screen.getByTestId("strength-bar");
    const strengthPills = screen.getAllByTestId("strength-bar-pill");

    expect(strengthBar.getAttribute("aria-valuenow")).toBe("1");
    strengthPills.forEach((pill, index) => {
      expect(pill.className).toContain(
        index < strength ? "bg-orange-500" : "bg-gray-300"
      );
    });

    // WHEN
    strength = 4;
    rerender(<StrengthBar value={strength} />);

    // THEN
    expect(strengthBar.getAttribute("aria-valuenow")).toBe("3");
    strengthPills.forEach((pill, index) => {
      expect(pill.className).toContain(
        index < strength ? "bg-teal-500" : "bg-gray-300"
      );
    });

    // WHEN
    strength = 0;
    rerender(<StrengthBar value={strength} />);

    // THEN
    expect(strengthBar.getAttribute("aria-valuenow")).toBe("0");
    strengthPills.forEach((pill, index) => {
      expect(pill.className).toContain(
        index < strength ? "bg-red-500" : "bg-gray-300"
      );
    });
  });
});
