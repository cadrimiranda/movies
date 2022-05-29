import { createContext, FC, useContext, useEffect, useState } from "react";
import useCreateFakeFavorites from "../hooks/useCreateFakeFavorites";
import { MovieResponse } from "../types/global";

type ContextValues = {
  favorites: MovieResponse[];
  setFavorites: (movie: MovieResponse) => void;
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

  return (
    <MainContext.Provider
      value={{ favorites, setFavorites: handleSetFavorites }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { useMainContext };
export default MainContextProvider;
