import React, { PropsWithChildren, useCallback, useState } from "react";
import { FilmographyProps } from "./types";
import FilmographyItem from "./filmography-item/FilmographyItem";

const Filmography: React.FC<PropsWithChildren<FilmographyProps>> = ({
  items,
}) => {
  const [films, setFilms] = useState(items.slice(0, 5));

  const showAll = useCallback(() => {
    setFilms(items);
  }, [items]);

  return (
    <div className="text-white">
      <h2 className="text-white text-[24px] font-semibold mb-[20px]">
        Полная фильмография
      </h2>
      <ul className="flex flex-col gap-5">
        {films.map((item, index) => (
          <FilmographyItem
            key={index}
            access
            img="/images/one-plus-one.jpg"
            link="#"
            ratio="9.2"
            title="1+1"
            year={2009}
          />
        ))}
      </ul>
      <button onClick={showAll}>Показать еще</button>
    </div>
  );
};

export default Filmography;
