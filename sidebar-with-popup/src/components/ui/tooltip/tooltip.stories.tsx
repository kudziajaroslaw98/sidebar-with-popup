import { InfoCircle } from "iconoir-react";
import Tooltip from "./tooltip";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],

  argTypes: {
    position: {
      name: "position",
      description: "Position of the tooltip",
      options: ["left", "right"],
      type: "string",
    },
  },

  args: {
    position: "left",
  },
};

export const NameWithShortcutOnLeft = {
  args: {
    name: "Load Greeting",
    shortcut: "⌘L",
  },
  render: (args: any) => (
    <button className="size-9 group relative flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200">
      <span
        data-testid="sidebar-item-icon"
        className="w-full h-full flex items-center justify-center"
      >
        <InfoCircle className="text-gray-600" />
      </span>

      <Tooltip {...args} />
    </button>
  ),
};

export const NameWithShortcutOnRight = {
  args: {
    name: "Load Greeting",
    shortcut: "⌘L",
    position: "right",
  },
  render: (args: any) => (
    <button className="size-9 group relative flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200">
      <span
        data-testid="sidebar-item-icon"
        className="w-full h-full flex items-center justify-center"
      >
        <InfoCircle className="text-gray-600" />
      </span>

      <Tooltip {...args} />
    </button>
  ),
};

export const NameOnly = {
  args: {
    name: "Load Greeting",
  },
  render: (args: any) => (
    <button className="size-9 group relative flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200">
      <span
        data-testid="sidebar-item-icon"
        className="w-full h-full flex items-center justify-center"
      >
        <InfoCircle className="text-gray-600" />
      </span>

      <Tooltip {...args} />
    </button>
  ),
};
