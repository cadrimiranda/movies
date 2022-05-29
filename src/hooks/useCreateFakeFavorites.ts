import { useEffect } from "react";
import useFetch from "use-http";
import { MoviesResponse } from "../types/global";

const useCreateFakeFavorites = () => {
  const { get, data, loading } = useFetch<MoviesResponse>("/movie/popular");

  useEffect(() => {
    get();
  }, []);

  return {
    list: data?.results || [],
    isLoadingFavorites: loading,
  };
};

export default useCreateFakeFavorites;
