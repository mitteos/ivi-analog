import Layout from '@/components/layout/Layout';

type ActorProps = {};

const Actor: React.FC<ActorProps> = () => {
  return (
    <Layout title={'actor name'}>
      <div className='page-container'>
        <h1>Actor Page</h1>
      </div>
    </Layout>
  );
};

export default Actor;
