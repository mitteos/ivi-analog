export interface MoviesSliderProps {
  title: string;
  data: any[];
  id: string | number;
  children: React.ReactNode[];
  link?: string;
  lastSlide?: React.ReactNode;
}
