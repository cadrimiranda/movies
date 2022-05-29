import { FnMovie, MovieResponse } from "../types/global";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Flex, Button } from "@chakra-ui/react";
import useGetMovieImage from "../hooks/useGetMovieImage";
import Rating from "./Rating";
import { useMainContext } from "../contexts/MainContext";
import { useMemo } from "react";

type MovieCardTypes = {
  movie: MovieResponse;
  isFavorite?: boolean;
  handleClickMovie: FnMovie;
  handleClickFavorite: (movie: MovieResponse, isFavorite: boolean) => void;
};

const MovieCard = ({
  movie,
  isFavorite,
  handleClickMovie,
  handleClickFavorite,
}: MovieCardTypes) => {
  const { popularPoster } = useGetMovieImage(movie.id);
  const { favorites } = useMainContext();

  const AmIFavorite = useMemo(() => {
    if (isFavorite) {
      return isFavorite;
    }
    return favorites.some((m) => m.id === movie.id);
  }, [favorites, isFavorite]);

  return (
    <Box
      p={3}
      borderRadius={4}
      border="1px solid rgba(0 ,0 ,0 ,0.6)"
      backgroundColor="#32383e"
      color="#c8c8c8"
      onClick={() => handleClickMovie({ ...movie, poster_path: popularPoster })}
      position="relative"
      cursor="pointer"
      height="400px"
      _hover={{
        backgroundColor: "#3e444c",
      }}
    >
      <Button
        position="absolute"
        top={0}
        right={0}
        backgroundColor="transparent"
        title={AmIFavorite ? "Remove from favorites" : "Add to favorites"}
        _hover={{
          transform: "scale(1.2)",
        }}
        onClick={(event: any) => {
          event && event.stopPropagation();
          handleClickFavorite(movie, AmIFavorite);
        }}
      >
        <StarIcon
          fontSize="larger"
          color={AmIFavorite ? "yellow.300" : "transparent"}
          strokeWidth={AmIFavorite ? "current" : "2"}
          stroke={AmIFavorite ? "current" : "yellow.300"}
        />
      </Button>
      <Flex align="center" justify="center">
        <Image
          height="300px"
          width="auto"
          loading="lazy"
          src={popularPoster}
          alt={movie.title}
          title={movie.overview}
        />
      </Flex>
      <Rating
        rate={movie.vote_average}
        mt={4}
        fontSize="xs"
        text={
          <>
            ({movie.vote_average}) &bull; {movie.vote_count} reviews
          </>
        }
      />

      <Flex align="flex-start" direction="column" justify="flex-start">
        <Box display="flex" alignItems="baseline">
          <Box
            mt={1}
            fontWeight="semibold"
            as="h1"
            lineHeight="tight"
            title={movie.title}
            wordBreak="break-word"
          >
            {movie.title}
            <Box
              as="span"
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              width="auto"
              textTransform="uppercase"
            >
              &bull; {new Date(movie.release_date).getFullYear()}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieCard;
