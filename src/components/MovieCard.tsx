import { FnMovie, MovieResponse } from "../types/global";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Flex,
  Button,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGetMovieImage from "../hooks/useGetMovieImage";
import Rating from "./Rating";
import { useMainContext } from "../contexts/MainContext";
import { useMemo } from "react";
import { appColors } from "../theme/colors";

type tHandleClickFavorite = (movie: MovieResponse, isFavorite: boolean) => void;

type MovieCardTypes = {
  movie?: MovieResponse;
  isLoading?: boolean;
  isFavorite?: boolean;
  handleClickMovie: FnMovie;
  handleClickFavorite: tHandleClickFavorite;
};

const DummyMovieCard = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <Skeleton
          startColor={appColors.primary}
          endColor={appColors.secondaryHover}
          height="300px"
          width="80%"
        />
      </Flex>
      <Flex align="flex-start" direction="column" justify="space-around">
        <SkeletonText
          startColor={appColors.primary}
          endColor={appColors.secondaryHover}
          mt="4"
          noOfLines={3}
          spacing="4"
          width="100%"
        />
      </Flex>
    </>
  );
};

const MovieInfo = ({
  handleClickFavorite,
  isFavorite,
  movie,
  popularPoster,
}: {
  movie: MovieResponse;
  isFavorite: boolean;
  popularPoster: string;
  handleClickFavorite: tHandleClickFavorite;
}) => (
  <>
    <Button
      position="absolute"
      top={0}
      right={0}
      backgroundColor="transparent"
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      _hover={{
        transform: "scale(1.2)",
      }}
      onClick={(event: any) => {
        event && event.stopPropagation();
        movie && handleClickFavorite(movie, isFavorite);
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
  </>
);

const MovieCard = ({
  movie,
  isLoading,
  isFavorite,
  handleClickMovie,
  handleClickFavorite,
}: MovieCardTypes) => {
  const { popularPoster } = useGetMovieImage(movie?.id);
  const { favorites } = useMainContext();

  const getIsFavorite = useMemo(() => {
    if (isFavorite) {
      return isFavorite;
    }
    return favorites.some((m) => m.id === movie?.id);
  }, [favorites, isFavorite, movie]);

  return (
    <Box
      p={3}
      borderRadius={4}
      border="1px solid rgba(0 ,0 ,0 ,0.6)"
      backgroundColor={appColors.secondary}
      color={appColors.fontColor}
      onClick={() =>
        movie && handleClickMovie({ ...movie, poster_path: popularPoster })
      }
      position="relative"
      cursor="pointer"
      height="400px"
      _hover={{
        backgroundColor: appColors.secondaryHover,
      }}
    >
      {isLoading && <DummyMovieCard />}
      {movie && (
        <MovieInfo
          movie={movie}
          isFavorite={getIsFavorite}
          popularPoster={popularPoster}
          handleClickFavorite={handleClickFavorite}
        />
      )}
    </Box>
  );
};

export default MovieCard;
