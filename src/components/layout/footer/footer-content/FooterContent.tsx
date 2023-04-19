import {
  footerAboutLinks,
  footerSectionsLinks,
} from '@/components/links-list/links';

import FooterButton from '../footer-button/FooterButton';
import Socials from '../socials/Socials';
import LinksList from '@/components/links-list/LinksList';
import { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

const FooterContent = () => {
  const [isSupportPhoneShown, setIsSupportPhoneShown] = useState(false);

  const handleClick = () => {
    setIsSupportPhoneShown(!isSupportPhoneShown);
  };

  const handleOutsideClick = () => {
    setIsSupportPhoneShown(false);
  };

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <div className='page-footer-container px-3 flex flex-col'>
      <div className='flex w-full py-12 border-y border-white/[.16]'>
        <div className='flex flex-col w-1/4 px-3'>
          <h3 className='link-list-title'>О нас</h3>
          <LinksList direction='column' links={footerAboutLinks} />
        </div>
        <div className='flex flex-col w-1/4 px-3'>
          <h3 className='link-list-title '>Разделы</h3>
          <LinksList direction='column' links={footerSectionsLinks} />
        </div>
        <div className='flex flex-col w-1/4 px-3'>
          <h3 className='link-list-title'>Служба поддержки</h3>
          <div>
            <p className='text-[15px] font-normal text-white/[.48]'>
              Мы всегда готовы вам помочь.
            </p>
            <p className='text-[15px] font-normal text-white/[.48]'>
              Наши операторы онлайн 24/7
            </p>
          </div>
          <div className='mt-6'>
            <FooterButton size='middle'>
              <span className='w-[164px]'>Написать в чате</span>
            </FooterButton>
          </div>

          <div className='flex relative mt-5'>
            <a className='mr-3 outline-none group' href='mailto:support@ivi.ru'>
              <FooterButton size='small' isWrappedByLink>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
              </FooterButton>
            </a>

            <FooterButton size='small' handleClick={handleClick} refObj={ref}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
            </FooterButton>

            {isSupportPhoneShown ? (
              <div className='absolute top-[68px]'>
                <a
                  className='iviFooter__phoneItem'
                  href='tel:+73432269220'
                  rel='nofollow'
                >
                  <FooterButton size='large'>
                    <span className='w-[194px]'>+7 343 226-92-20</span>
                  </FooterButton>
                </a>
              </div>
            ) : null}
          </div>

          <div className='mt-[30px]'>
            <a
              className='link'
              href='https://ask.ivi.ru/?_gl=1*1hsuxkm*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTc5MjE3MS45LjEuMTY4MTc5NTc3NS42MC4wLjA.'
              target='_blank'
              rel='noopener noreferrer'
            >
              ask.ivi.ru
            </a>
            <p className='text-[15px] font-normal text-white/[.48]'>
              Ответы на вопросы
            </p>
          </div>
        </div>

        <div className='w-1/4 px-3'>
          <a
            className='flex flex-col items-center outline-none'
            href='https://www.ivi.ru/subscribe?redirect_url=%2F'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex justify-center items-center w-[104px] h-[104px] rounded-[20px] footer-subscription-link'>
              <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'>
                <path
                  stroke='#ffffff'
                  strokeWidth={1.5}
                  fill='transparent'
                  d='M9.26 9.26 3 11v3l14.14 3.14M21 15.34V6l-7.31 2.03M11.6 16.8a3.008 3.008 0 1 1-5.8-1.6M2 2l20 20'
                  transform='scale(2.33333)'
                />
              </svg>
            </div>

            <p className='mt-6 text-[15px] text-[#a5a1b2] text-center'>
              Смотрите фильмы, сериалы и мультфильмы без рекламы
            </p>
          </a>
        </div>
      </div>

      <div className='flex w-full py-12'>
        <div className='w-4/6'>
          <div>
            <div className='flex [&>*:not(:first-child)]:ml-3'>
              <a
                className='group outline-none'
                href='https://go.onelink.me/app/devicesiOS'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <img src='/apple-logo.svg' />
                  <div className='flex flex-col items-start  ml-2'>
                    <span className='text-[10px] leading-[12px] font-normal'>
                      Загрузить в
                    </span>
                    <span className='text-[15px] leading-[20px]'>
                      App Store
                    </span>
                  </div>
                </FooterButton>
              </a>

              <a
                className='group outline-none'
                href='https://go.onelink.me/app/devicesAndroid'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <img src='/googleplay-logo.svg' />
                  <div className='flex flex-col items-start ml-2'>
                    <span className='text-[10px] leading-[12px] font-normal'>
                      Доступно в
                    </span>
                    <span className='text-[15px] leading-[20px]'>
                      Google Play
                    </span>
                  </div>
                </FooterButton>
              </a>

              <a
                className='group outline-none'
                href='https://www.ivi.ru/pages/tvsmart/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z'
                    />
                  </svg>

                  <div className='flex flex-col items-start ml-2'>
                    <span className='text-[10px] leading-[12px] font-normal'>
                      Смотрите на
                    </span>
                    <span className='text-[15px] leading-[20px]'>Smart TV</span>
                  </div>
                </FooterButton>
              </a>

              <a
                className='group outline-none'
                href='https://www.ivi.ru/devices'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
                    />
                  </svg>

                  <span className='ml-2 text-[15px] leading-[20px]'>
                    Все устройства
                  </span>
                </FooterButton>
              </a>
            </div>
          </div>

          <div className='mt-8 text-[15px] text-white/[.48]'>
            <p>©&nbsp;2023</p>
            <p>
              Developed by{' '}
              <span>
                <a
                  className='header-link'
                  href='https://github.com/Bonamente'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  bonamente
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='header-link'
                  href='https://github.com/kimutir'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  kimutir
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='header-link'
                  href='https://github.com/mitteos'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  mitteos
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className='flex justify-end items-start w-1/3'>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
