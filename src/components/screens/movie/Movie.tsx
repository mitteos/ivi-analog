import Layout from "@/components/layout/Layout";
import {
  Banner,
  CreatorsList, Modal,
  MovieInfo,
  Player,
  ReviewsList,
} from "@/components/screens/movie/components";
import React from "react";

const Movie: React.FC<{}> = () => {
  return (
    <Layout title={"movie name"}>
      <div className="page-container pt-12">
        <div className="py-6 min-[1050px]:hidden">
          <MovieInfo variant="short" />
        </div>
        <div className="flex gap-x-10 max-[1050px]:flex-col max-[1050px]:gap-y-10">
          <Player />
          <MovieInfo variant="full" />
        </div>

        <div className="my-10">
          <CreatorsList />
        </div>
        <div className="mb-10">
          <ReviewsList />
        </div>
        <div className="py-10">
          <Banner />
        </div>
      </div>
      <Modal />
    </Layout>
  );
};

export default Movie;
