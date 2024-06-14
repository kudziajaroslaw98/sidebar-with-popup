import { fireEvent, render, screen } from "@testing-library/react";
import SideBar, { SideBarItem } from "./sidebar";

describe("SideBar", () => {
  const onClickMock = jest.fn();
  const mockItems: SideBarItem[] = [
    {
      icon: <>Icon1</>,
      name: "Item 1",
      shortcut: "Ctrl+I",
      onClick: onClickMock,
    },
    { icon: <>Icon2</>, name: "Item 2", shortcut: "Ctrl+H" },
    {
      icon: <>Icon3</>,
      name: "Item 3",
      shortcut: "Ctrl+F",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders SideBar component correctly", () => {
    // SETUP
    render(<SideBar items={mockItems} />);

    // THEN
    const sidebar = screen.getByTestId("sidebar");
    const sidebarItems = screen.getAllByTestId("sidebar-item");
    const sidebarItemIcons = screen.getAllByTestId("sidebar-item-icon");
    const tooptipNames = screen.getAllByTestId("tooltip-name");
    const tooltipShortcuts = screen.getAllByTestId("tooltip-shortcut");

    expect(sidebar).toBeDefined();
    expect(sidebarItems).toHaveLength(mockItems.length);
    expect(sidebarItemIcons).toHaveLength(mockItems.length);
    expect(tooptipNames).toHaveLength(mockItems.length);
    expect(tooltipShortcuts).toHaveLength(mockItems.length);

    mockItems.forEach((item, index) => {
      expect(tooptipNames[index].textContent).toBe(item.name);
      expect(tooltipShortcuts[index].textContent).toBe(item.shortcut);
    });
  });

  it("calls onClick when an item is clicked", () => {
    // SETUP
    render(<SideBar items={mockItems} />);

    // THEN
    expect(onClickMock).toHaveBeenCalledTimes(0);

    // WHEN
    const sidebarItems = screen.getAllByTestId("sidebar-item");

    fireEvent.click(sidebarItems[0]);

    // THEN
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
