import { useRef, useState } from "react";
import { MovieResponse } from "../../types/global";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import MovieDetails, { ModalRelf } from "../../components/ModalMovieDetails";
import { useMainContext } from "../../contexts/MainContext";
import useGetNowPlaying from "../../hooks/useGetNowPlaying";

const NowPlaying = () => {
  const { setFavorites, removeFavorite } = useMainContext();
  const [movie, setMovie] = useState<MovieResponse | null>(null);
  const refModal = useRef<ModalRelf>(null);
  const { movies, isLoading } = useGetNowPlaying();

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
      {movies.map((movie) => {
        return (
          <GridItem>
            <MovieCard
              handleClickFavorite={(_movie, isFavorite) => {
                if (isFavorite) {
                  removeFavorite(_movie);
                } else {
                  setFavorites(_movie);
                }
              }}
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
      {isLoading &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <MovieCard
            handleClickFavorite={() => {}}
            handleClickMovie={() => {}}
            isFavorite={false}
            isLoading
          />
        ))}
      <MovieDetails
        ref={refModal}
        movie={movie}
        handleCloseModal={() => setMovie(null)}
      />
    </SimpleGrid>
  );
};

export default NowPlaying;
