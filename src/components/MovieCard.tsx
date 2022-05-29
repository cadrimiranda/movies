import { MovieResponse } from "../types/global";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Flex, Button } from "@chakra-ui/react";
import useGetMovieImage from "../hooks/useGetMovieImage";
import Rating from "./Rating";

type MovieCardTypes = {
  movie: MovieResponse;
  isFavorite?: boolean;
  handleClickMovie: (movie: MovieResponse) => void;
};

const MovieCard = ({ movie, isFavorite, handleClickMovie }: MovieCardTypes) => {
  const { popularPoster } = useGetMovieImage(movie.id);

  return (
    <Box
      onClick={() => handleClickMovie({ ...movie, poster_path: popularPoster })}
      position="relative"
      cursor="pointer"
      height="400px"
    >
      <Button
        position="absolute"
        top={0}
        right={10}
        backgroundColor="transparent"
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        <StarIcon
          fontSize="larger"
          color={isFavorite ? "yellow.300" : "transparent"}
          strokeWidth={isFavorite ? "current" : "2"}
          stroke={isFavorite ? "current" : "yellow.300"}
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
