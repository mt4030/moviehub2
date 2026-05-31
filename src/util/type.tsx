
export interface Movie {
  id: number;
  title: string;
  name?: string;
  year?: number;
  type?: string;
  poster?: string;
  posterLarge?: string;
  backdrop?: string;
  image_url?: string;
  runtime_minutes?: number;
  user_rating?: number;
  us_rating?: string;
  genre_names?: string[];
  plot_overview?: string;
  trailer?: string;
  imdb_id?: string;

}



export type MovieCache = Record<number, Movie>;



export interface MovieContextType {
  allContent: Movie[]; 
  setAllContent:any;
  favorite: Movie[];
  bookmark: Movie[];
  history: Movie[];
  fakeAuth: boolean;
  FakeAuthentication: () => void;
  FakeLogOut: () => void;
  ToggleFavorite: (item: Movie) => void;
  ToggleBookmark: (item: Movie) => void;
  setHistory: React.Dispatch<React.SetStateAction<Movie[]>>;
}
