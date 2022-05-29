import { useEffect, useRef, useState } from "react";
import useFetch from "use-http";
import { MovieResponse, MoviesResponse } from "../types/global";

const useGetNowPlaying = () => {
  const refPage = useRef(1);
  const refTotalPages = useRef<number>(null);
  const [movies, setMovies] = useState<MovieResponse[]>([]);
  const { get, data, loading } = useFetch<MoviesResponse>(
    "/movie/now_playing?language=en-US"
  );

  const fetchNowPlaying = () => {
    const totalPages = refTotalPages.current;

    get(`/movie/now_playing?language=en-US&page=${refPage.current}`).then(
      (res) => {
        const _movies = movies.concat(res.results);
        setMovies(_movies);
        if (totalPages === null) {
          // @ts-ignore
          refTotalPages.current = res.total_pages;
        }
      }
    );
  };

  useEffect(() => {
    const infiniteScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        const newPage = refPage.current + 1;

        const totalPages = refTotalPages.current;
        if (totalPages && newPage <= totalPages) {
          refPage.current = newPage;
          fetchNowPlaying();
        }
      }
    };

    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [movies]);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return {
    movies,
    isLoadingFavorites: loading,
  };
};

export default useGetNowPlaying;
