import { render, screen } from "@testing-library/react";
import StrengthIndicator from "./strength-indicator";

describe("StrengthIndicator", () => {
  test("renders StrengthBar with correct value", () => {
    // SETUP
    const strength = 3;
    render(<StrengthIndicator strength={strength} />);

    // THEN
    const strengthIcon = screen.getByTestId("strength-icon");
    const strengthMessage = screen.getByTestId("strength-message");
    const strengthIndicator = screen.getByTestId("strength-indicator");

    expect(strengthIndicator).toBeDefined();
    expect(strengthIcon.classList).toContain("text-gray-400");
    expect(strengthMessage.textContent).toBe(
      "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu"
    );
  });

  test("renders success message when strength is 5 or more", () => {
    // SETUP
    const strength = 5;
    render(<StrengthIndicator strength={strength} />);

    // THEN
    const strengthIcon = screen.getByTestId("strength-icon");
    const strengthMessage = screen.getByTestId("strength-message");
    const strengthIndicator = screen.getByTestId("strength-indicator");

    expect(strengthIndicator).toBeDefined();
    expect(strengthIcon.classList).toContain("text-green-500");
    expect(strengthMessage.textContent).toBe(
      "Wystarczającą liczba tagów została dodana"
    );
  });
});
