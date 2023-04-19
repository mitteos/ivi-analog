export interface MoviesSliderProps {
  title: string;
  id: string | number;
  children: React.ReactNode[];
  link?: string;
  lastSlide?: React.ReactNode;
  slidesPerView: number | "auto";
}
