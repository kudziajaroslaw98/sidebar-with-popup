import SelectableList from "./selectable-list";

export default {
  title: "UI/Selectable List",
  component: SelectableList,
  tags: ["autodocs"],
};

export const SelectableListExample = {
  args: {
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ],
    selectedItems: [
      { id: 1, name: "Item 1" },
      { id: 3, name: "Item 3" },
    ],
    keyBy: "id",
    onChange: () => {},
    render: (item: any) => <div>{item.name}</div>,
  },
};
