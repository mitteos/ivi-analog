import Layout from '@/components/layout/Layout';

const title =
  'Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн фильмов на ivi.ru';

type MoviesProps = {};

const Movies: React.FC<MoviesProps> = () => {
  return (
    <Layout title={title}>
      <div className='page-container'>
        <h1>Movies Page</h1>
      </div>
    </Layout>
  );
};

export default Movies;
