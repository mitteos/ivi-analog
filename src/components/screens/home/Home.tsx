import TestButton from '@/components/example-component/TestButton';
import Layout from '@/components/layout/Layout';

const title =
  'Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве';

const description =
  'Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. Для вас всегда доступны бесплатные фильмы без регистрации на любой вкус: сериалы, фильмы, мультфильмы и многое другое.';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout title={title} description={description}>
      <div className='page-container'>
        <h1 className='text-2xl mb-3'>Let&apos;s get started!</h1>
        <TestButton />
      </div>
    </Layout>
  );
};

export default Home;
