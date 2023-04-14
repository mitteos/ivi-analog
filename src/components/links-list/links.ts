import { LinkType } from './types';

export const navLinks: LinkType[] = [
  {
    text: 'Мой Иви',
    path: '/',
    tooltip: 'Мой Иви',
    isExternal: false,
  },
  {
    text: 'Что нового',
    path: 'https://www.ivi.ru/new',
    tooltip: 'Что нового',
    isExternal: true,
  },
  {
    text: 'Фильмы',
    path: '/movies',
    tooltip: 'Фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы',
    path: '/movies',
    tooltip: 'Сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Мультфильмы',
    path: 'https://www.ivi.ru/animation',
    tooltip: 'Мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'TV+',
    path: 'https://www.ivi.ru/tvplus',
    tooltip: 'TV+',
    isExternal: true,
  },
];

// TODO конкретные endpoints уточнить у бекенда
export const movieGenresLinks: LinkType[] = [
  {
    text: 'Артхаус',
    path: '/movies/arthouse',
    tooltip: 'Смотреть фильмы артхаус онлайн',
    isExternal: false,
  },
  {
    text: 'Боевики',
    path: '/movies/boeviki',
    tooltip: 'Смотреть боевики онлайн',
    isExternal: false,
  },
  {
    text: 'Вестерн',
    path: '/movies/western',
    tooltip: 'Смотреть вестерны онлайн',
    isExternal: false,
  },
  {
    text: 'Военные',
    path: '/movies/voennye',
    tooltip: 'Смотреть военное кино онлайн',
    isExternal: false,
  },
  {
    text: 'Детективы',
    path: '/movies/detective',
    tooltip: 'Смотреть детективное кино онлайн',
    isExternal: false,
  },
  {
    text: 'Для всей семьи',
    path: '/movies/dlya_vsej_semi',
    tooltip: 'Смотреть семейные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Для детей',
    path: '/movies/detskiy',
    tooltip: 'Смотреть детское кино онлайн',
    isExternal: false,
  },
  {
    text: 'Документальные',
    path: '/movies/documantery',
    tooltip: 'Смотреть документальные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Драмы',
    path: '/movies/drama',
    tooltip: 'Смотреть кинодрамы онлайн',
    isExternal: false,
  },
  {
    text: 'Исторические',
    path: '/movies/istoricheskie',
    tooltip: 'Смотреть исторические фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Катастрофы',
    path: '/movies/disaster',
    tooltip: 'Смотреть фильмы катастрофы онлайн',
    isExternal: false,
  },
  {
    text: 'Комедии',
    path: '/movies/comedy',
    tooltip: 'Смотреть комедии онлайн',
    isExternal: false,
  },
  {
    text: 'Криминальные',
    path: '/movies/crime',
    tooltip: 'Смотреть криминальные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Мелодрамы',
    path: '/movies/melodramy',
    tooltip: 'Смотреть мелодрамы онлайн',
    isExternal: false,
  },
  {
    text: 'Мистические',
    path: '/movies/misticheskie',
    tooltip: 'Смотреть мистические фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'По комиксам',
    path: '/movies/comics',
    tooltip: 'Смотреть фильмы по комиксам онлайн',
    isExternal: false,
  },
  {
    text: 'Приключения',
    path: '/movies/adventures',
    tooltip: 'Смотреть приключенческое кино онлайн',
    isExternal: false,
  },
  {
    text: 'Спорт',
    path: '/movies/sport',
    tooltip: 'Смотреть спортивные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Триллеры',
    path: '/movies/thriller',
    tooltip: 'Смотреть триллеры онлайн',
    isExternal: false,
  },
  {
    text: 'Ужасы',
    path: '/movies/horror',
    tooltip: 'Смотреть фильмы ужасов онлайн',
    isExternal: false,
  },
  {
    text: 'Фантастика',
    path: '/movies/scifi',
    tooltip: 'Смотреть фантастику онлайн',
    isExternal: false,
  },
  {
    text: 'Фэнтези',
    path: '/movies/fantasy',
    tooltip: 'Смотреть фантастику онлайн',
    isExternal: false,
  },
];

export const movieContries: LinkType[] = [
  {
    text: 'Русские',
    path: '/movies/ru',
    tooltip: 'Смотреть русские фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Зарубежные',
    path: '/movies/foreign',
    tooltip: 'Смотреть зарубежные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Советское кино',
    path: '/movies/su',
    tooltip: 'Смотреть советское кино онлайн',
    isExternal: false,
  },
];

export const movieYears: LinkType[] = [
  {
    text: 'Фильмы 2023 года',
    path: '/movies/2023',
    tooltip: 'Смотреть фильмы 2023 года онлайн',
    isExternal: false,
  },
  {
    text: 'Фильмы 2022 года',
    path: '/movies/2022',
    tooltip: 'Смотреть фильмы 2022 года онлайн',
    isExternal: false,
  },
  {
    text: 'Фильмы 2021 года',
    path: '/movies/2021',
    tooltip: 'Смотреть фильмы 2021 года онлайн',
    isExternal: false,
  },
  {
    text: 'Фильмы 2020 года',
    path: '/movies/2020',
    tooltip: 'Смотреть фильмы 2020 года онлайн',
    isExternal: false,
  },
];

export const movieNew: LinkType[] = [
  {
    text: 'Новинки',
    path: 'https://www.ivi.ru/new/movie-new',
    tooltip: 'Смотреть новинки',
    isExternal: true,
  },

  {
    text: 'Подборки',
    path: 'https://www.ivi.ru/collections',
    tooltip: 'Подборки',
    isExternal: true,
  },

  {
    text: 'Иви.Рейтинг',
    path: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    tooltip: 'Иви.Рейтинг',
    isExternal: true,
  },

  {
    text: 'Скоро на Иви',
    path: 'https://www.ivi.ru/new/soon-ivi',
    tooltip: 'Смотреть скоро на Иви',
    isExternal: true,
  },

  {
    text: 'Трейлеры',
    path: 'https://www.ivi.ru/trailers',
    tooltip: 'Смотреть трейлеры',
    isExternal: true,
  },

  {
    text: 'Что посмотреть',
    path: 'https://www.ivi.ru/goodmovies',
    tooltip: 'Что посмотреть',
    isExternal: true,
  },

  {
    text: 'Фильмы в HD',
    path: 'https://www.ivi.ru/collections/movies-hd',
    tooltip: 'Смотреть фильмы в HD онлайн',
    isExternal: true,
  },

  {
    text: 'Выбор Иви',
    path: 'https://www.ivi.ru/collections/vyibor-ivi',
    tooltip: 'Смотреть фильмы в HD онлайн',
    isExternal: true,
  },

  {
    text: 'Новинки подписки',
    path: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
    tooltip: 'Новинки подписки',
    isExternal: true,
  },

  {
    text: 'Фильмы Amediateka',
    path: 'https://www.ivi.ru/collections/filmyi-amediateka',
    tooltip: 'Фильмы Amediateka',
    isExternal: true,
  },

  {
    text: 'Популярные фильмы',
    path: 'https://www.ivi.ru/collections/best-movies',
    tooltip: 'Популярные фильмы',
    isExternal: true,
  },

  {
    text: 'Фильмы Иви',
    path: 'https://www.ivi.ru/collections/ivi-originals',
    tooltip: 'Фильмы Иви',
    isExternal: true,
  },
];

export const seriesGenresLinks: LinkType[] = [
  {
    text: 'Биография',
    path: '/movies/biography',
    tooltip: 'Смотреть биографические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Боевики',
    path: '/movies/boeviki',
    tooltip: 'Смотреть сериалы в жанре боевики онлайн',
    isExternal: false,
  },
  {
    text: 'Военные',
    path: '/movies/voennye',
    tooltip: 'Смотреть военные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Детективы',
    path: '/movies/detective',
    tooltip: 'Смотреть детективные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Для всей семьи',
    path: '/movies/dlya_vsej_semi',
    tooltip: 'Смотреть семейные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Документальные',
    path: '/movies/documentary',
    tooltip: 'Смотреть документальные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Дорамы',
    path: '/movies/documentary',
    tooltip: 'Смотреть фильмы дорамы онлайн',
    isExternal: false,
  },
  {
    text: 'Драмы',
    path: '/movies/drama',
    tooltip: 'Смотреть драматические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Исторические',
    path: '/movies/history',
    tooltip: 'Смотреть исторические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Комедийные',
    path: '/movies/comedy',
    tooltip: 'Смотреть комедийные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Криминальные',
    path: '/movies/crime',
    tooltip: 'Смотреть криминальные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Медицинские',
    path: '/movies/medicine',
    tooltip: 'Смотреть медицинские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Мелодрамы',
    path: '/movies/melodramy',
    tooltip: 'Смотреть сериалы в жанре мелодрамы онлайн',
    isExternal: false,
  },
  {
    text: 'Мистические',
    path: '/movies/misticheskie',
    tooltip: 'Смотреть мистические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Приключения',
    path: '/movies/adventures',
    tooltip: 'Смотреть приключенческие сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Романтические',
    path: '/movies/romanticheskie',
    tooltip: 'Смотреть романтические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Телешоу',
    path: '/movies/tvshow',
    tooltip: 'Смотреть телешоу онлайн',
    isExternal: false,
  },
  {
    text: 'Триллеры',
    path: '/movies/thriller',
    tooltip: 'Смотреть сериалы триллеры онлайн',
    isExternal: false,
  },
  {
    text: 'Турецкие',
    path: '/movies/turetskie',
    tooltip: 'Смотреть турецкие сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Ужасы',
    path: '/movies/horror',
    tooltip: 'Смотреть сериалы в жанре ужасы онлайн',
    isExternal: false,
  },
  {
    text: 'Фантастические',
    path: '/movies/scifi',
    tooltip: 'Смотреть фантастические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Фэнтези',
    path: '/movies/fantasy',
    tooltip: 'Смотреть сериалы фэнтези онлайн',
    isExternal: false,
  },
];

export const seriesContries: LinkType[] = [
  {
    text: 'Русские',
    path: '/movies/ru',
    tooltip: 'Русские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Зарубежные',
    path: '/movies/foreign',
    tooltip: 'Зарубежные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Американские',
    path: '/movies/us',
    tooltip: 'Американские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Украинские',
    path: '/movies/ua',
    tooltip: 'Украинские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Корейские',
    path: '/movies/kr',
    tooltip: 'Корейские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Турецкие',
    path: '/movies/tr',
    tooltip: 'Турецкие сериалы онлайн',
    isExternal: false,
  },
];

export const seriesYears: LinkType[] = [
  {
    text: 'Сериалы 2023 года',
    path: '/movies/2023',
    tooltip: 'Смотреть сериалы 2023 онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы 2022 года',
    path: '/movies/2022',
    tooltip: 'Смотреть сериалы 2022 онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы 2021 года',
    path: '/movies/2021',
    tooltip: 'Смотреть сериалы 2021 онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы 2020 года',
    path: '/movies/2020',
    tooltip: 'Смотреть сериалы 2020 онлайн',
    isExternal: false,
  },
];

export const seriesNew: LinkType[] = [
  {
    text: 'Новинки',
    path: 'https://www.ivi.ru/new/series-new',
    tooltip: 'Смотреть новинки',
    isExternal: true,
  },
  {
    text: 'Иви.Рейтинг',
    path: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    tooltip: 'Иви.Рейтинг',
    isExternal: true,
  },
  {
    text: 'Сериалы в HD',
    path: 'https://www.ivi.ru/collections/series-hd',
    tooltip: 'Смотреть сериалы в HD онлайн',
    isExternal: true,
  },
  {
    text: 'Бесплатные сериалы',
    path: 'https://www.ivi.ru/collections/tvshow-free?sort=new',
    tooltip: 'Бесплатные сериалы',
    isExternal: true,
  },
  {
    text: 'Сериалы Amediateka',
    path: 'https://www.ivi.ru/collections/serialyi-amediateka',
    tooltip: 'Сериалы Amediateka',
    isExternal: true,
  },
  {
    text: 'Сериалы Paramount Play',
    path: 'https://www.ivi.ru/collections/series-paramount-play',
    tooltip: 'Сериалы Paramount Play',
    isExternal: true,
  },
];

export const animationGenresLinks: LinkType[] = [
  {
    text: 'Аниме',
    path: 'https://www.ivi.ru/animation/anime/page2',
    tooltip: 'Смотреть аниме мультфильм онлайн',
    isExternal: true,
  },
  {
    text: 'Боевик',
    path: 'https://www.ivi.ru/animation/militants',
    tooltip: 'Смотреть мультфильмы в жанре боевик онлайн',
    isExternal: true,
  },
  {
    text: 'Детектив',
    path: 'https://www.ivi.ru/animation/detective',
    tooltip: 'Смотреть мультфильмы в жанре детектив онлайн',
    isExternal: true,
  },
  {
    text: 'Для взрослых',
    path: 'https://www.ivi.ru/animation/vzroslye',
    tooltip: 'Смотреть мультфильмы для взрослых онлайн',
    isExternal: true,
  },
  {
    text: 'Для всей семьи',
    path: 'https://www.ivi.ru/animation/dlya_vsej_semi',
    tooltip: 'Смотреть семейные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Для детей',
    path: 'https://www.ivi.ru/animation/detskie',
    tooltip: 'Смотреть детские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Драма',
    path: 'https://www.ivi.ru/animation/drama',
    tooltip: 'Смотреть драматические мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'История',
    path: 'https://www.ivi.ru/animation/history',
    tooltip: 'Смотреть исторические мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Комедия',
    path: 'https://www.ivi.ru/animation/comedy',
    tooltip: 'Смотреть комедийные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Криминальные',
    path: 'https://www.ivi.ru/animation/crime',
    tooltip: 'Смотреть криминальные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Мюзикл',
    path: 'https://www.ivi.ru/animation/musical',
    tooltip: 'Смотреть мультфильмы мюзиклы онлайн',
    isExternal: true,
  },
  {
    text: 'Полнометражные',
    path: 'https://www.ivi.ru/animation/polnometrazhnye',
    tooltip: 'Смотреть полнометражные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Приключения',
    path: 'https://www.ivi.ru/animation/adventure',
    tooltip: 'Смотреть приключенческие мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Развивающие',
    path: 'https://www.ivi.ru/animation/razvivayuschie',
    tooltip: 'Смотреть развивающие мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Сериалы',
    path: 'https://www.ivi.ru/animation/serialy',
    tooltip: 'Смотреть анимационные сериалы онлайн',
    isExternal: true,
  },
  {
    text: 'Спорт',
    path: 'https://www.ivi.ru/animation/sport',
    tooltip: 'Смотреть мультфильмы про спорт онлайн',
    isExternal: true,
  },
  {
    text: 'Триллер',
    path: 'https://www.ivi.ru/animation/thriller',
    tooltip: 'Смотреть мультфильмы триллеры онлайн',
    isExternal: true,
  },
  {
    text: 'Ужасы',
    path: 'https://www.ivi.ru/animation/horror',
    tooltip: 'Смотреть мультфильмы в жанре ужасы онлайн',
    isExternal: true,
  },
  {
    text: 'Фантастика',
    path: 'https://www.ivi.ru/animation/fantastic',
    tooltip: 'Смотреть фантастические мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Фэнтези',
    path: 'https://www.ivi.ru/animation/fantasy',
    tooltip: 'Смотреть мультфильмы фэнтези онлайн',
    isExternal: true,
  },
];

export const animationContries: LinkType[] = [
  {
    text: 'Советские',
    path: 'https://www.ivi.ru/animation/su',
    tooltip: 'Советские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Русские',
    path: 'https://www.ivi.ru/animation/ru',
    tooltip: 'Русские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Американские',
    path: 'https://www.ivi.ru/animation/us',
    tooltip: 'Американские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Зарубежные',
    path: 'https://www.ivi.ru/animation/foreign',
    tooltip: 'Зарубежные мультфильмы онлайн',
    isExternal: true,
  },
];

export const animationYears: LinkType[] = [
  {
    text: 'Мультики 2023 года',
    path: 'https://www.ivi.ru/animation/2023',
    tooltip: 'Смотреть мультфильмы 2023 года онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики 2022 года',
    path: 'https://www.ivi.ru/animation/2022',
    tooltip: 'Смотреть мультфильмы 2022 года онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики 2021 года',
    path: 'https://www.ivi.ru/animation/2021',
    tooltip: 'Смотреть мультфильмы 2021 года онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики 2020 года',
    path: 'https://www.ivi.ru/animation/2020',
    tooltip: 'Смотреть мультфильмы 2020 года онлайн',
    isExternal: true,
  },
];

export const animationNew: LinkType[] = [
  {
    text: 'Новинки',
    path: 'https://www.ivi.ru/new/series-new',
    tooltip: 'Смотреть новые мультики онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики в HD',
    path: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    tooltip: 'Смотреть мультфильмы в HD онлайн',
    isExternal: true,
  },
  {
    text: 'Мультфильмы Paramount Play / Nickelodeon',
    path: 'https://www.ivi.ru/collections/series-paramount-play',
    tooltip: 'Мультфильмы Paramount Play / Nickelodeon',
    isExternal: true,
  },
  {
    text: 'Мультфильмы Dreamworks',
    path: 'https://www.ivi.ru/collections/series-paramount-play',
    tooltip: 'Мультфильмы студии Dreamworks',
    isExternal: true,
  },
  {
    text: 'Мультфильмы СТС Kids',
    path: 'https://www.ivi.ru/collections/serialyi-amediateka',
    tooltip: 'Мультфильмы СТС Kids',
    isExternal: true,
  },
];

export const tvLinks: LinkType[] = [
  {
    text: 'ТВ-каналы',
    path: 'https://www.ivi.ru/tvplus',
    tooltip: 'Смотреть ТВ-каналы онлайн',
    isExternal: true,
  },
  {
    text: 'Развлекательное',
    path: 'https://www.ivi.ru/tvplus/razvlekatelnoe',
    tooltip: 'Смотреть развлекательное ТВ онлайн',
    isExternal: true,
  },
  {
    text: 'Дети',
    path: 'https://www.ivi.ru/tvplus/deti',
    tooltip: 'Смотреть передачи для детей онлайн',
    isExternal: true,
  },
  {
    text: 'Спортивное ТВ',
    path: 'https://www.ivi.ru/tvplus/sport',
    tooltip: 'Смотреть спортивное ТВ онлайн',
    isExternal: true,
  },
  {
    text: 'Документальное',
    path: 'https://www.ivi.ru/tvplus/documentalnoe',
    tooltip: 'Смотреть документальное ТВ онлайн',
    isExternal: true,
  },
];

export const footerAboutLinks: LinkType[] = [
  {
    text: 'О компании',
    path: 'https://corp.ivi.ru/?_gl=1*d0q8mo*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTM2MDAwMS40LjEuMTY4MTQwNjc1OS4yOC4wLjA.',
    isExternal: true,
  },
  {
    text: 'Вакансии',
    path: 'https://corp.ivi.ru/career/#career-vacancy-block',
    isExternal: true,
  },
  {
    text: 'Программа бета-тестирования',
    path: 'https://www.ivi.ru/pages/beta/',
    isExternal: true,
  },
  {
    text: 'Информация для партнёров',
    path: 'https://www.ivi.ru/info/partners',
    isExternal: true,
  },
  {
    text: 'Размещение рекламы',
    path: 'https://corp.ivi.ru/advertisers/?_gl=1*ro4ta9*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTM2MDAwMS40LjEuMTY4MTQwNzIwMC4yOC4wLjA.',
    isExternal: true,
  },
  {
    text: 'Пользовательское соглашение',
    path: 'https://www.ivi.ru/info/agreement',
    isExternal: true,
  },
  {
    text: 'Политика конфиденциальности',
    path: 'https://www.ivi.ru/info/confidential',
    isExternal: true,
  },
  {
    text: 'Комплаенс',
    path: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens',
    isExternal: true,
  },
];

export const footerSectionsLinks: LinkType[] = [
  {
    text: 'Мой Иви',
    path: '/',
    isExternal: false,
  },
  {
    text: 'Что нового',
    path: 'https://www.ivi.ru/new',
    isExternal: true,
  },
  {
    text: 'Фильмы',
    path: '/movies',
    isExternal: false,
  },
  {
    text: 'Сериалы',
    path: 'https://www.ivi.ru/series',
    isExternal: true,
  },
  {
    text: 'Мультфильмы',
    path: 'https://www.ivi.ru/animation',
    isExternal: true,
  },
  {
    text: 'TV+',
    path: 'https://www.ivi.ru/tvplus',
    isExternal: true,
  },
  {
    text: 'Что посмотреть',
    path: 'https://www.ivi.ru/goodmovies',
    isExternal: true,
  },
  {
    text: 'Активация сертификата',
    path: 'https://www.ivi.ru/cert',
    isExternal: true,
  },
];
