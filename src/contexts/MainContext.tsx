import { createContext, FC, useContext, useState } from "react";
import { MoviePlayingResponse } from "../types/global";

type ContextValues = {
  favorites: MoviePlayingResponse[];
  setFavorites: (movie: MoviePlayingResponse) => void;
};

const MainContext = createContext<ContextValues>({} as ContextValues);

const useMainContext = () => useContext(MainContext);

const MainContextProvider: FC = ({ children }) => {
  const [favorites, setFavorites] = useState<MoviePlayingResponse[]>([]);

  const handleSetFavorites = (movie: MoviePlayingResponse) => {
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
