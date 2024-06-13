import { Hashtag, Sparks, SparksSolid } from "iconoir-react";

const CmsAiSection = () => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="flex items-center gap-2 p-2 text-gray-400 font-medium text-sm">
        <SparksSolid className="size-4" />
        CMS AI
      </h4>

      <button className="hover:bg-gray-100 p-2 rounded-md w-full gap-2 flex items-center">
        <Sparks className="size-4 text-purple-500" />
        <span className="font-medium text-sm">Analizuj tekst</span>
      </button>

      <button className="hover:bg-gray-100 p-2 rounded-md w-full gap-2 flex items-center">
        <Hashtag
          data-testid={"sidebar-item-icon"}
          className="size-4 -scale-x-100 text-purple-500"
        />
        <span className="font-medium text-sm">Najbardziej popularne tagi</span>
      </button>
    </div>
  );
};

export default CmsAiSection;
