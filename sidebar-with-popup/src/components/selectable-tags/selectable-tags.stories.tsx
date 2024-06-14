import SelectableTags from "./selectable-tags";

export default {
  title: "Components/Selectable Tags",
  component: SelectableTags,
  tags: ["autodocs"],
};

export const SelectableTagsExample = {
  args: {
    tags: [
      { id: 1, name: "Tag1", usages: 2 },
      { id: 2, name: "Tag2", usages: 2 },
    ],
    pickedTags: [{ id: 1, name: "Tag1", usages: 2 }],
    onChange: () => {},
  },
  render: (args: any) => (
    <div className="w-44">
      <SelectableTags {...args} />
    </div>
  ),
};
