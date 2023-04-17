import LinksList from '@/components/links-list/LinksList';
import { LinkType } from '@/components/links-list/types';

export type DropdownMainContentProps = {
  genresLinks: LinkType[];
  contriesLinks: LinkType[];
  yearsLinks: LinkType[];
  newLinks: LinkType[];
};

const DropdownMainContent: React.FC<DropdownMainContentProps> = ({
  genresLinks,
  contriesLinks,
  yearsLinks,
  newLinks,
}) => {
  return (
    <div className='flex mt-16 p-8 min-h-[390px]'>
      <div className='w-1/3 px-3'>
        <h3 className='link-list-title'>Жанры</h3>
        <div className='columns-2 gap-x-6'>
          <LinksList direction='column' links={genresLinks} />
        </div>
      </div>
      <div className='w-1/6 px-3'>
        <div>
          <h3 className='link-list-title'>Страны</h3>
          <LinksList direction='column' links={contriesLinks} />
        </div>

        <div className='mt-6'>
          <h3 className='link-list-title'>Годы</h3>
          <LinksList direction='column' links={yearsLinks} />
        </div>
      </div>
      <div className='w-1/2'>
        <LinksList direction='column' links={newLinks} />
      </div>
    </div>
  );
};

export default DropdownMainContent;
