import LinksList from '@/components/links-list/LinksList';
import { LinkType } from '@/components/links-list/types';

export type DropdownTvContentProps = {
  tvLinks: LinkType[];
};

const DropdownTvContent: React.FC<DropdownTvContentProps> = ({ tvLinks }) => {
  return (
    <div className='flex mt-16 p-8 min-h-[390px] text-white'>
      <div className='flex flex-col justify-between w-1/6 px-3'>
        <div>
          <h3 className='link-list-title'>ТВ онлайн</h3>
          <LinksList direction='column' links={tvLinks} />
        </div>

        <a
          className='flex justify-center text-[15px] font-bold rounded-lg py-[9px] px-[15px]  bg-[#312b45] hover:bg-[#3a3352]'
          href='https://www.ivi.ru/tvplus/tv-schedule-today'
          target='_blank'
          rel='noopener noreferrer'
        >
          Телепрограмма
        </a>
      </div>
      <div className='w-5/6 px-3'>
        <div className='flex flex-col justify-between h-full pl-8 border-l-[1px] border-white/[.16]'>
          TODO
        </div>
      </div>
    </div>
  );
};

export default DropdownTvContent;
