import { render, screen } from "@testing-library/react";
import SideBar from "./sidebar";

describe("SideBar", () => {
  it("renders SideBar component correctly", () => {
    const mockItems = [
      { icon: <div>Icon1</div>, name: "Item 1" },
      { icon: <div>Icon2</div>, name: "Item 2" },
    ];

    render(<SideBar items={mockItems} />);

    // Add your assertion here to check if the SideBar component renders correctly
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});
