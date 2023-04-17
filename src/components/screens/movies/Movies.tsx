import Layout from "@/components/layout/Layout";
import FilterBar from "./filterbar/FilterBar";
import MoviesSlider from "./slider/MoviesSlider";
import Section from "@/components/layout/section/Section";
import PreviewFilm from "@/components/previews/preview-film/PreviewFilm";
import PreviewActor from "@/components/previews/preview-actor/PreviewActor";
import Headerbar from "./headerbar/Headerbar";
import PreviewFilmLast from "@/components/previews/preview-film-last/PreviewFilmLast";

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
        <Section>
          <Headerbar />
        </Section>
        <Section>
          <FilterBar></FilterBar>
        </Section>
        <Section>
          <MoviesSlider
            link="#"
            id="best-films"
            data={sliderData}
            title="Лучшие фильмы"
            lastSlide={<PreviewFilmLast link="#" />}
          >
            {sliderData.map((data, index) => (
              <PreviewFilm
                img="/images/one-plus-one.jpg"
                key={index}
                acception="Бесплатно"
                country="Франция"
                duration={130}
                genre="Драмма/Комедия"
                ratio={9.2}
                title="1+1"
                year={2008}
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider id="actors" data={sliderData} title="Персоны">
            {sliderData.map((data, index) => (
              <PreviewActor
                img="/images/actor.jpg"
                key={index}
                firstName="Скарлетт"
                secondName="Йоханссон"
                films={11}
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider
            link="#"
            id="ivi-films"
            data={sliderData}
            title="Выбор Иви"
            lastSlide={<PreviewFilmLast link="#" />}
          >
            {sliderData.map((data, index) => (
              <PreviewFilm
                img="/images/monk.jpg"
                key={index}
                acception="Подписка"
                country="Россия"
                duration={130}
                genre="Комедия"
                ratio={9.2}
                title="Монах и Бес"
                year={2008}
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider
            link="#"
            id="amedia-films"
            data={sliderData}
            title="Фильмы Amediateka"
            lastSlide={<PreviewFilmLast link="#" />}
          >
            {sliderData.map((data, index) => (
              <PreviewFilm
                img="/images/game.jpg"
                key={index}
                acception="Подписка"
                country="США"
                duration={130}
                genre="Документальные"
                ratio={9.2}
                title="Игра престолов"
                year={2019}
              />
            ))}
          </MoviesSlider>
        </Section>
      </div>
    </Layout>
  );
};

export default Movies;
