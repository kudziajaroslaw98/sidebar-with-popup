const PopoverBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-2 flex flex-col gap-2 max-h-72">{children}</div>;
};

export default PopoverBody;
