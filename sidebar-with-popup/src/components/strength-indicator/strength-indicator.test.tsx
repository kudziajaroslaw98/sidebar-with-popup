import { render, screen } from "@testing-library/react";
import StrengthIndicator from "./strength-indicator";

describe("StrengthIndicator", () => {
  test("renders StrengthBar with correct value", () => {
    const strength = 3;
    render(<StrengthIndicator strength={strength} />);
    const strengthBar = screen.getByTestId("strength-bar");
    expect(strengthBar).toHaveAttribute("value", strength.toString());
  });

  test("renders info message when strength is less than 5", () => {
    const strength = 3;
    render(<StrengthIndicator strength={strength} />);
    const infoMessage = screen.getByText(
      `Zbyt mało tagów. Dodaj jeszcze ${
        5 - strength
      } aby poprawić widoczność artykułu`
    );
    expect(infoMessage).toBeInTheDocument();
  });

  test("renders success message when strength is 5 or more", () => {
    const strength = 5;
    render(<StrengthIndicator strength={strength} />);
    const successMessage = screen.getByText(
      "Wystarczającą liczbę tagów została dodana"
    );
    expect(successMessage).toBeInTheDocument();
  });
});
