import Meta, { MetaProps } from '../seo/Meta';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout: React.FC<MetaProps> = ({ title, description, children }) => {
  return (
    <Meta title={title} description={description}>
      <div className='h-screen grid grid-rows-layout'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Meta>
  );
};

export default Layout;
