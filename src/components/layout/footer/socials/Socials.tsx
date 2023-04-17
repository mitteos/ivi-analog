const Socials = () => {
  return (
    <div className='flex items-center [&>*:not(:first-child)]:ml-3'>
      <a
        className='footer-social'
        href='https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='sr-only'>VK</span>
        <img className='footer-social-img' src='/vkontakte-logo.svg' />
      </a>
      <a
        className='footer-social'
        href='https://ok.ru/ivi.ru'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='sr-only'>OK</span>
        <img className='footer-social-img' src='/odnoklassniki-logo.svg' />
      </a>
      <a
        className='footer-social'
        href='https://twitter.com/ivi_ru'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='sr-only'>Twitter</span>
        <img className='footer-social-img' src='/twitter-logo.svg' />
      </a>
      <a
        className='footer-social'
        href='https://vb.me/a0544c'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='sr-only'>Viber</span>
        <img className='footer-social-img' src='/viber-logo.svg' />
      </a>
      <a
        className='footer-social'
        href='https://www.linkedin.com/company/2543415/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='sr-only'>LinkedIn</span>
        <img className='footer-social-img' src='/linkedin-logo.svg' />
      </a>
      <a
        className='footer-social'
        href='https://t.me/official_iviru'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='sr-only'>Telegram</span>
        <img className='footer-social-img' src='/telegram-logo.svg' />
      </a>
    </div>
  );
};

export default Socials;
