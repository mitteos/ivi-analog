import Layout from "@/components/layout/Layout";
import FilterBar from "./filterbar/FilterBar";
import CustomSlider from "@/components/customs/custom-slider/CustomSlider";
import PreviewFilm from "@/components/preview-film/PreviewFilm";

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

        <FilterBar></FilterBar>
        <div>
          <CustomSlider>
            {sliderData.map((i, idx) => (
              <PreviewFilm
                z={sliderData.length * 100 - idx}
                country="Франция"
                duration={140}
                genre="Комедия"
                year={2012}
                ratio={9.5}
                key={idx}
              />
            ))}
          </CustomSlider>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
