import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import FooterTab from './footer-tab/FooterTab';

const MobileFooter = () => {
  const router = useRouter();
  const [currentActiveTab, setCurrentActiveTab] = useState<string>(
    router.pathname
  );

  const handleClick = (tab: string) => {
    setCurrentActiveTab(tab);
  };

  return (
    <footer className='fixed bottom-0 left-0 right-0 z-50'>
      <div className='mobile-footer h-12 text-white'>
        <Link
          className='footer-tab-item'
          href='/'
          onClick={() => handleClick('/')}
        >
          <FooterTab isActive={currentActiveTab === '/'}>
            <span className='w-[20px] h-[20px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-[20px] h-[20px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>
            </span>
            <span className='mt-[4px]'>Мой Иви</span>
          </FooterTab>
        </Link>

        <Link
          className='footer-tab-item'
          href='/movies'
          onClick={() => handleClick('/movies')}
        >
          <FooterTab isActive={currentActiveTab === '/movies'}>
            <span className='w-[20px] h-[20px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-[20px] h-[20px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776'
                />
              </svg>
            </span>
            <span className='mt-[4px]'>Каталог</span>
          </FooterTab>
        </Link>

        <div className='footer-tab-item' onClick={() => handleClick('search')}>
          <FooterTab isActive={currentActiveTab === 'search'}>
            <span className='w-[20px] h-[20px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-[20px] h-[20px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </span>
            <span className='mt-[4px]'>Поиск</span>
          </FooterTab>
        </div>

        <a
          className='footer-tab-item'
          data-test='tv_plus'
          href='https://www.ivi.ru/tvplus'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => handleClick('tv')}
        >
          <FooterTab isActive={currentActiveTab === 'tv'}>
            <span className='w-[20px] h-[20px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-[20px] h-[20px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z'
                />
              </svg>
            </span>
            <span className='mt-[4px]'>TV+</span>
          </FooterTab>
        </a>

        <div className='footer-tab-item' onClick={() => handleClick('more')}>
          <FooterTab isActive={currentActiveTab === 'more'}>
            <span className='w-[20px] h-[20px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-[20px] h-[20px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </span>
            <span className='mt-[4px]'>Ещё</span>
          </FooterTab>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
