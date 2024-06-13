import { screen } from "@testing-library/react";

const tooltipElements = {
  name: screen.getByTestId("tooltip-name"),
  shortcut: screen.getByTestId("tooltip-shortcut"),
  trigger: screen.getByTestId("tooltip-trigger"),
  wrapper: screen.getByTestId("tooltip-wrapper"),
};

export default tooltipElements;
