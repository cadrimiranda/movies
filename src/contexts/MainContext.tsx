import { createContext, FC, useContext, useEffect, useState } from "react";
import useCreateFakeFavorites from "../hooks/useCreateFakeFavorites";
import { FnMovie, MovieResponse } from "../types/global";

type ContextValues = {
  favorites: MovieResponse[];
  setFavorites: FnMovie;
  removeFavorite: FnMovie;
};

const MainContext = createContext<ContextValues>({} as ContextValues);

const useMainContext = () => useContext(MainContext);

const MainContextProvider: FC = ({ children }) => {
  const [favorites, setFavorites] = useState<MovieResponse[]>([]);
  const { list } = useCreateFakeFavorites();

  useEffect(() => {
    if (list.length) {
      setFavorites(list);
    }
  }, [list]);

  const handleSetFavorites = (movie: MovieResponse) => {
    const _favorites = [movie, ...favorites];
    setFavorites(_favorites);
  };

  const removeFavorite = (movie: MovieResponse) => {
    const _favorites = favorites.filter((m) => m.id !== movie.id);
    setFavorites(_favorites);
  };

  return (
    <MainContext.Provider
      value={{ favorites, setFavorites: handleSetFavorites, removeFavorite }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { useMainContext };
export default MainContextProvider;
