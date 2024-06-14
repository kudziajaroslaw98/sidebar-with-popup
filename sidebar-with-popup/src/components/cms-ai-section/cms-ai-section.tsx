import { Hashtag, Sparks, SparksSolid } from 'iconoir-react';

const CmsAiSection = () => {
  return (
    <div className='flex flex-col gap-1 p-1'>
      <h4 className='flex items-center gap-2 p-2 text-sm font-medium text-gray-400'>
        <SparksSolid className='size-4' />
        CMS AI
      </h4>

      <button className='flex w-full items-center gap-2 rounded-md p-2 hover:bg-gray-100'>
        <Sparks className='size-4 text-purple-500' />
        <span className='text-sm font-medium'>Analizuj tekst</span>
      </button>

      <button className='flex w-full items-center gap-2 rounded-md p-2 hover:bg-gray-100'>
        <Hashtag className='size-4 -scale-x-100 text-purple-500' />
        <span className='text-sm font-medium'>Najbardziej popularne tagi</span>
      </button>
    </div>
  );
};

export default CmsAiSection;
