import { MoviePlayingResponse } from "../types/global";
import { Box, Image } from "@chakra-ui/react";
import useGetMovieImage from "../hooks/useGetMovieImage";

const MovieCard = ({ movie }: { movie: MoviePlayingResponse }) => {
  const { popularPoster } = useGetMovieImage(movie.id);

  return (
    <Box>
      <Image loading="lazy" src={popularPoster} alt={movie.title} />
    </Box>
  );
};

export default MovieCard;
