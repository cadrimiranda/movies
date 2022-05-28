import { useEffect, useState } from "react";
import useFetch from "use-http";

type MovieImage = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type MovieImages = {
  id: number;
  backdrops: MovieImage[];
  posters: MovieImage[];
};

const useGetMovieImage = (movieId: number) => {
  const [popularPoster, setPopularPoster] = useState("");
  const { get, loading: loadingImage } = useFetch<MovieImages>();

  useEffect(() => {
    get(`/movie/${movieId}/images`).then((res) => {
      const { posters } = res;
      const mostVoted = posters.sort((p1, p2) => p1.vote_count - p2.vote_count)[
        posters.length - 1
      ];
      setPopularPoster(
        `https://image.tmdb.org/t/p/w500/${mostVoted.file_path}`
      );
    });
  }, [movieId]);

  return { popularPoster, loadingImage };
};

export default useGetMovieImage;
