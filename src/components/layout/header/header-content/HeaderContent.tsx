import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import HeaderDropdown from '../header-dropdown/HeaderDropdown';
import SubscriptionBtn from '../subscription-button/SubscriptionBtn';
import LangSwitcher from '../lang-switcher/LangSwitcher';
const DynamicSearchBtn = dynamic(() => import('../search-button/SearchBtn'), {
  ssr: false,
});

const DynamicNavigation = dynamic(() => import('../navigation/Navigation'), {
  ssr: false,
});

const DynamicNotificationBtn = dynamic(
  () => import('../notification-button/NotificationBtn'),
  {
    ssr: false,
  }
);

const DynamicProfileBtn = dynamic(
  () => import('../profile-button/ProfileBtn'),
  {
    ssr: false,
  }
);

const HeaderContent = () => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1160px)',
  });

  const isMobileScreen = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const [currentHoveringLink, setCurrentHoveringLink] = useState('');

  const handleHovering = (current: string) => {
    setCurrentHoveringLink(current);
  };

  const handleClick = () => {
    setCurrentHoveringLink('');
  };

  return (
    <div className='relative z-20 page-header-container flex items-stretch h-[72px] px-3'>
      <div className='flex items-stretch justify-between w-full'>
        {!isHomePage ? (
          <div className='absolute top-[71px] left-3 right-3 w-[98%] h-[1px] bg-white/[.16]'></div>
        ) : null}

        <DynamicNavigation
          handleHovering={handleHovering}
          handleClick={handleClick}
        />

        <div className='flex [&>*]:ml-4'>
          <div
            onMouseOver={
              isLargeScreen ? () => handleHovering('subscription') : undefined
            }
            onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
            onClick={handleClick}
          >
            {isHomePage ? (
              <SubscriptionBtn text='Оплатить подписку' bgColor='gradient' />
            ) : (
              <SubscriptionBtn text='Смотреть 30 дней за 1 ₽' bgColor='solid' />
            )}
          </div>

          {isLargeScreen ? <DynamicSearchBtn /> : null}

          {isMobileScreen ? null : (
            <DynamicNotificationBtn
              handleHovering={handleHovering}
              handleClick={handleClick}
            />
          )}

          <LangSwitcher />

          {isMobileScreen ? null : (
            <DynamicProfileBtn
              handleHovering={handleHovering}
              handleClick={handleClick}
            />
          )}
        </div>

        {isLargeScreen && currentHoveringLink === 'movies' ? (
          <HeaderDropdown linkType='movies' handleHovering={handleHovering} />
        ) : null}
        {isLargeScreen && currentHoveringLink === 'series' ? (
          <HeaderDropdown linkType='series' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'animation' ? (
          <HeaderDropdown
            linkType='animation'
            handleHovering={handleHovering}
          />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'tv' ? (
          <HeaderDropdown linkType='tv' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'notification' ? (
          <HeaderDropdown
            linkType='notification'
            handleHovering={handleHovering}
          />
        ) : null}

        {isLargeScreen &&
        !isHomePage &&
        currentHoveringLink === 'subscription' ? (
          <HeaderDropdown
            linkType='subscription'
            handleHovering={handleHovering}
          />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'profile' ? (
          <HeaderDropdown linkType='profile' handleHovering={handleHovering} />
        ) : null}
      </div>
    </div>
  );
};

export default HeaderContent;
