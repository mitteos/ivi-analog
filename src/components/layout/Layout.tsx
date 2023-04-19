import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Meta, { MetaProps } from '../seo/Meta';
import Header from './header/Header';

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
  ssr: false,
});

const DynamicMobileFooter = dynamic(() => import('./footer/MobileFooter'), {
  ssr: false,
});

const Layout: React.FC<MetaProps> = ({ title, description, children }) => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1160px)',
  });

  return (
    <Meta title={title} description={description}>
      <div className='h-screen grid grid-rows-layout grid-cols-1'>
        <Header />
        <main>{children}</main>
        {isLargeScreen ? <DynamicFooter /> : <DynamicMobileFooter />}
      </div>
    </Meta>
  );
};

export default Layout;
