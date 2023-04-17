const DropdownSubscriptionContent = () => {
  return (
    <div className='flex mt-16 p-8 text-white'>
      <div className='w-1/2'>
        <h3 className='text-[28px] font-bold'>Подписка Иви</h3>
        <h4 className='text-[15px] text-white/[.48]'>
          Стоимость 399 ₽ в месяц, продление автоматическое
        </h4>
        <div className='grid grid-cols-3 auto-rows-auto gap-6 mt-8'>
          <div className='subscription-tile'>
            <div className='tile-icon'>
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
                  d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
            </div>
            <h5 className='subscription-tile-title'>
              Новинки сериалов и фильмов
            </h5>
          </div>

          <div className='subscription-tile col-span-2'>
            <div className='tile-icon'>
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
                  d='M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                />
              </svg>
            </div>
            <h5 className='subscription-tile-title'>
              Еженедельное пополнение каталога фильмами и сериалами со всего
              мира
            </h5>
          </div>

          <div className='subscription-tile'>
            <div className='tile-icon'>
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
                  d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46'
                />
              </svg>
            </div>
            <h5 className='subscription-tile-title'>
              Фильмы и сериалы без рекламы
            </h5>
          </div>

          <div className='subscription-tile'>
            <div className='tile-icon'>
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
                  d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                />
              </svg>
            </div>
            <h5 className='subscription-tile-title'>
              Семейный аккаунт на 5 устройствах
            </h5>
          </div>

          <div className='subscription-tile'>
            <div className='tile-icon'>
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
                  d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
            </div>
            <h5 className='subscription-tile-title'>
              Загрузка на мобильные устройства
            </h5>
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <button className='w-2/3 mr-3 text-[15px] font-bold bg-[#ea003d] hover:bg-[#ff0f4d] rounded-lg py-[9px] px-[15px]'>
            Смотреть 30 дней за 1 ₽
          </button>

          <p className='w-1/3 px-3 text-[#a5a1b2] text-[13px]'>
            Отключить можно в&nbsp;любой&nbsp;момент
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropdownSubscriptionContent;
