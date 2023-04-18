const DropdownProfileContent = () => {
  return (
    <div className='flex mt-16 py-8 px-3 text-white'>
      <div className='grid grid-cols-[repeat(4,minmax(155px,1fr))] grid-rows-[repeat(2, auto)] gap-6 w-4/6 px-3'>
        <a
          href='https://www.ivi.ru/profile/purchases'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
                />
              </svg>
            </div>
            <h3 className='profile-title'>Покупки</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/favorites'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                />
              </svg>
            </div>
            <h3 className='profile-title'>Смотреть позже</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/watched'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3'
                />
              </svg>
            </div>
            <h3 className='profile-title'>История просмотров</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/subscriptions'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile relative'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>
            </div>

            <div className='absolute top-2 right-2 w-[10px] h-[10px] rounded-[5px] bg-[#ea003d] shadow-[0_2px_8px_rgba(234,0,61,.8)]'></div>
            <h3 className='profile-title'>Подписки</h3>
            <h4 className='profile-tile-small'>Подключить</h4>
          </div>
        </a>
        <a href='https://www.ivi.ru' target='_blank' rel='noopener noreferrer'>
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
                />
              </svg>
            </div>
            <h3 className='profile-title'>Активация сертификата</h3>
          </div>
        </a>
        <a href='https://www.ivi.ru' target='_blank' rel='noopener noreferrer'>
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z'
                />
              </svg>
            </div>
            <h3 className='profile-title'>Вход по коду</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/cards'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                />
              </svg>
            </div>
            <h3 className='profile-title'>Способы оплаты</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/referral'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 text-white/[.48]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
                />
              </svg>
            </div>
            <h3 className='profile-title'>Пригласить друзей</h3>
          </div>
        </a>
      </div>

      <div className='w-1/3 px-3'>
        <div className='flex flex-col justify-between h-full pl-6 border-l-[1px] border-white/[.16]'>
          <button className='w-full text-[15px] font-bold bg-[#ea003d] hover:bg-[#ff0f4d] rounded-lg py-[9px] px-[15px]'>
            Войти или зарегистрироваться
          </button>
          <div className='flex flex-col'>
            <a
              className='header-link'
              href='https://www.ivi.ru/profile/settings'
              target='_blank'
              rel='noopener noreferrer'
            >
              Настройки
            </a>
            <a
              className='header-link'
              href='https://ask.ivi.ru/?_gl=1*r90v0d*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTYyMzc3Ny43LjEuMTY4MTY2ODY4MC4yOC4wLjA.'
              target='_blank'
              rel='noopener noreferrer'
            >
              Помощь
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownProfileContent;
