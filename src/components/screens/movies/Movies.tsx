import Layout from "@/components/layout/Layout";
import FilterBar from "./filterbar/FilterBar";
import MoviesSlider from "./slider/MoviesSlider";
import Section from "@/components/layout/section/Section";

const title =
  "Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн фильмов на ivi.ru";

type MoviesProps = {};

const sliderData = [
  "Россия",
  "США",
  "Франция",
  "Китай",
  "Корея",
  "Великобритания",
  "Испания",
  "Италия",
  "Бразилия",
  "Индия",
  "Китай",
  "Корея",
  "Великобритания",
  "Испания",
  "Италия",
  "Бразилия",
  "Индия",
];

const GenreItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[180px] h-[280px] rounded-md bg-[#1f1b2e] flex text-white shrink-0 justify-center items-center">
      {children}
    </div>
  );
};

const Movies: React.FC<MoviesProps> = () => {
  return (
    <Layout title={title}>
      <div className="page-container">
        <h1>Movies Page</h1>
        <Section>
          <FilterBar></FilterBar>
        </Section>
        <Section>
          <MoviesSlider
            id="best-films"
            data={sliderData}
            title="Лучшие фильмы"
          ></MoviesSlider>
        </Section>
      </div>
    </Layout>
  );
};

export default Movies;
