import Layout from "@/components/layout/Layout";
import FilterBar from "./filterbar/FilterBar";

const title =
  "Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн фильмов на ivi.ru";

type MoviesProps = {};

const options = [
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
  "тестик",
];

const Movies: React.FC<MoviesProps> = () => {
  return (
    <Layout title={title}>
      <div className="page-container">
        <h1>Movies Page</h1>

        <FilterBar></FilterBar>
        <div></div>
      </div>
    </Layout>
  );
};

export default Movies;
