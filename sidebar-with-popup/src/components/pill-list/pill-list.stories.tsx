import PillList from "./pill-list";

export default {
  title: "Components/Pill List",
  component: PillList,
  tags: ["autodocs"],
};

export const PillListExample = {
  args: {
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ],
    textByKey: "name",
    onClose: (item: any) => console.log(item),
    emptyMessage: "No items",
  },
};
