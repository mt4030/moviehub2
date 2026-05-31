import {
  createContext,
  useContext,
} from "react";
import type {  ReactNode, } from "react"
import type { Movie, MovieContextType } from "../util/type";
import { usePersistedState } from "@/util/persistedState";

interface ProviderProps {children: ReactNode;}

import { allContentData } from "@/data/motvdata";
const MovieContext = createContext<MovieContextType | null>(null);



const MovieContextProvider = ({ children }: ProviderProps) => {

  const [favorite, setFavorite] = usePersistedState<Movie[]>("favorite", []);
  const [bookmark, setBookmark] = usePersistedState<Movie[]>("bookmark", []);
  const [history, setHistory] = usePersistedState<Movie[]>("history", []);
  const [fakeAuth,setFakeAuth]=usePersistedState<boolean>("Auth", false)
const [allContent,setAllContent]=usePersistedState('allContent',allContentData)




  const ToggleBookmark = (item: Movie) => {
    setBookmark((prev) =>
      prev.some((m) => m.id === item.id)
        ? prev.filter((m) => m.id !== item.id)
        : [...prev, item]
    );
  };

  const ToggleFavorite = (item: Movie) => {
    setFavorite((prev) =>
      prev.some((m) => m.id === item.id)
        ? prev.filter((m) => m.id !== item.id)
        : [...prev, item]
    );
  };


  ////fake auth
  const FakeAuthentication=()=>{
    setFakeAuth(true)
  }
  const FakeLogOut=()=>{
    setFakeAuth(false)
  }

  const value: MovieContextType = {
   allContent
   ,setAllContent,
    favorite,
    bookmark,
     ToggleFavorite,
    ToggleBookmark,
    history,
     setHistory,
     FakeAuthentication,
     fakeAuth,
     FakeLogOut
  };

  return (
    <MovieContext.Provider value={value}>
   {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

export const useMcontext = (): MovieContextType => {
  const ctx = useContext(MovieContext);
  if (!ctx)
    throw new Error(
      "useMovieContext must be used inside MovieContextProvider"
    );
  return ctx;
};
