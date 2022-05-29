import { useEffect, useRef, useState } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import useFetch from "use-http";
import { MoviesResponse, MovieResponse } from "../../types/global";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import MovieDetails, { ModalRelf } from "../../components/ModalMovieDetails";

const NowPlaying = () => {
  const {
    get: getNowPlaying,
    data,
    loading,
  } = useFetch<MoviesResponse>("/movie/now_playing?language=en-US");
  const [movie, setMovie] = useState<MovieResponse | null>(null);
  const refModal = useRef<ModalRelf>(null);

  useEffect(() => {
    getNowPlaying();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 4,
        xl: 6,
        "2xl": 6,
      }}
      gap={4}
    >
      {data?.results.map((movie) => {
        return (
          <GridItem>
            <MovieCard
              handleClickMovie={(_movie) => {
                setMovie(_movie);
                refModal.current?.onOpenModal();
              }}
              movie={movie}
              isFavorite={false}
            />
          </GridItem>
        );
      })}
      <MovieDetails
        ref={refModal}
        movie={movie}
        handleCloseModal={() => setMovie(null)}
      />
    </SimpleGrid>
  );
};

export default NowPlaying;
