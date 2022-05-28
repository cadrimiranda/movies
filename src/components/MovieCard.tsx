import { MoviePlayingResponse } from "../types/global";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Flex, Button } from "@chakra-ui/react";
import useGetMovieImage from "../hooks/useGetMovieImage";

const MovieCard = ({
  movie,
  isFavorite,
}: {
  movie: MoviePlayingResponse;
  isFavorite?: boolean;
}) => {
  const { popularPoster } = useGetMovieImage(movie.id);

  const normalize = ((movie.vote_average - 1) / (10 - 1)) * 5;

  return (
    <Box position="relative" cursor="pointer" height="400px">
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

      <Box display="flex" alignItems="baseline">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              fontSize="xs"
              key={i}
              color={i < normalize ? "teal.500" : "gray.300"}
            />
          ))}
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
          mt={4}
        >
          ({movie.vote_average}) &bull; {movie.vote_count} reviews
        </Box>
      </Box>
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
