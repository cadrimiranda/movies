import { useRef, useState } from "react";
import { MovieResponse } from "../../types/global";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import MovieDetails, { ModalRelf } from "../../components/ModalMovieDetails";
import { useMainContext } from "../../contexts/MainContext";

const FavoriteMovies = () => {
  const { favorites, removeFavorite } = useMainContext();
  const [movie, setMovie] = useState<MovieResponse | null>(null);
  const refModal = useRef<ModalRelf>(null);

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
      {favorites.map((movie) => {
        return (
          <GridItem>
            <MovieCard
              handleClickFavorite={removeFavorite}
              handleClickMovie={(_movie) => {
                setMovie(_movie);
                refModal.current?.onOpenModal();
              }}
              movie={movie}
              isFavorite
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

export default FavoriteMovies;
