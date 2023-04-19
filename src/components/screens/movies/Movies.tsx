import Layout from "@/components/layout/Layout";
import FilterBar from "./filterbar/FilterBar";
import MoviesSlider from "./slider/MoviesSlider";
import Section from "@/components/layout/section/Section";
import PreviewFilm from "@/components/previews/preview-film/PreviewFilm";
import PreviewActor from "@/components/previews/preview-actor/PreviewActor";
import Headerbar from "./headerbar/Headerbar";
import PreviewFilmLast from "@/components/previews/preview-film-last/PreviewFilmLast";
import PreviewGenre from "@/components/previews/preview-genre/PreviewGenre";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import PreviewCollection from "@/components/previews/preview-collection/PreviewCollection";
import PreviewRatio from "@/components/previews/preview-ratio/PreviewRatio";

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
            id="collections"
            title="Фильмы-новинки"
            slidesPerView={4}
          >
            {sliderData.map((data, index) => (
              <PreviewCollection
                key={index}
                link="#"
                title="Зарубежные новинки"
                img="/images/films-collection.png"
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider link="#" id="genres" title="Жанры" slidesPerView={7}>
            {sliderData.map((data, index) => (
              <PreviewGenre
                key={index}
                link="#"
                title="Зарубежные"
                icon={<GlobeAltIcon className="w-[40px]" />}
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider
            slidesPerView={7}
            link="#"
            id="best-films"
            title="Лучшие фильмы"
            lastSlide={<PreviewFilmLast link="#" />}
          >
            {sliderData.map((data, index) => (
              <PreviewFilm
                img="/images/one-plus-one.jpg"
                key={index}
                access="sub"
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
          <MoviesSlider slidesPerView={7} id="ratio" title="Рейтинг Иви">
            {sliderData.slice(0, 5).map((data, index) => (
              <PreviewRatio
                img="/images/ratio.jpg"
                key={index}
                link="#"
                title="Лучшая режиссура"
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider slidesPerView={7} id="actors" title="Персоны">
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
            slidesPerView={7}
            link="#"
            id="ivi-films"
            title="Выбор Иви"
            lastSlide={<PreviewFilmLast link="#" />}
          >
            {sliderData.map((data, index) => (
              <PreviewFilm
                img="/images/monk.jpg"
                key={index}
                access="buy"
                country="Россия"
                duration={130}
                genre="Комедия"
                ratio={9.2}
                title="Монах и Бес"
                year={2008}
                iviChoice
              />
            ))}
          </MoviesSlider>
        </Section>
        <Section>
          <MoviesSlider
            slidesPerView={7}
            link="#"
            id="amedia-films"
            title="Фильмы Amediateka"
            lastSlide={<PreviewFilmLast link="#" />}
          >
            {sliderData.map((data, index) => (
              <PreviewFilm
                img="/images/game.jpg"
                key={index}
                access="free"
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
