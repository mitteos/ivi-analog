import Layout from '@/components/layout/Layout';

type MovieProps = {};

const Movie: React.FC<MovieProps> = () => {
  return (
    <Layout title={'movie name'}>
      <div className='page-container'>
        <h1>Movie Page</h1>
      </div>
    </Layout>
  );
};

export default Movie;
