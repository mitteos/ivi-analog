export interface PreviewFilmProps {
  ratio: number;
  year: number;
  country: string;
  genre: string;
  duration: number;
  title: string;
  access: PreviewAccessType;
  img: string;
}

export type PreviewAccessType = "sub" | "buy" | "free";
