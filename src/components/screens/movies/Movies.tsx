import Layout from "@/components/layout/Layout";
import FilterBar from "./filterbar/FilterBar";
import CustomSlider from "@/components/customs/custom-slider/CustomSlider";
import PreviewFilm from "@/components/previews/preview-film/PreviewFilm";
import PreviewActor from "@/components/previews/preview-actor/PreviewActor";

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

        <FilterBar></FilterBar>

        <CustomSlider id="films" size="default">
          {sliderData.map((i, idx) => (
            <PreviewFilm
              country="Франция"
              acception="Бесплатно"
              duration={140}
              genre="Комедия"
              year={2012}
              ratio={9.5}
              title="Один плюс один"
              key={idx}
            />
          ))}
        </CustomSlider>
        <CustomSlider id="actors" size="default">
          {sliderData.map((i, idx) => (
            <PreviewActor
              firstName="Скарлетт"
              secondName="Йоханссон"
              films={11}
              key={idx}
            />
          ))}
        </CustomSlider>
      </div>
    </Layout>
  );
};

export default Movies;
