import Layout from "@/components/layout/Layout";
import PersonBackground from "./person-background/personBackground";
import PersonSection from "./person-section/PersonSection";
import Description from "./description/Description";

const backgroundImage = "/images/person-image-big.jpg";

const Person: React.FC = () => {
  return (
    <>
      <Layout title={"actor name"}>
        <>
          {backgroundImage && <PersonBackground img={backgroundImage} />}

          <div className="page-container">
            <PersonSection>
              <Description />
            </PersonSection>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Person;
