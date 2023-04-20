import Layout from "@/components/layout/Layout";
import PersonBackground from "./person-background/personBackground";
import PersonSection from "./person-section/PersonSection";
import Description from "./description/Description";
import CustomSlider from "@/components/customs/custom-slider/CustomSlider";
import PreviewFilm from "@/components/previews/preview-film/PreviewFilm";
import Filmography from "./filmography/Filmography";
import Biography from "./biography/Biography";

const backgroundImage = "/images/person-image-big.jpg";

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
];

const Person: React.FC = () => {
  return (
    <>
      <Layout title={"Скарлетт Йоханссон"}>
        <>
          {backgroundImage && <PersonBackground img={backgroundImage} />}

          <div className="page-container">
            <PersonSection>
              <Description />
            </PersonSection>
            <PersonSection withoutPadding title="Главные фильмы">
              <CustomSlider
                buttonsPosition="outside"
                id="person-films"
                slidesPerView={4}
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
                    iviChoice={index % 2 === 0 ? true : false}
                  />
                ))}
              </CustomSlider>
            </PersonSection>
            <PersonSection>
              <Filmography items={sliderData} />
            </PersonSection>
            <PersonSection title="Биография">
              <Biography />
            </PersonSection>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Person;
