import { MoviePlayingResponse } from "../types/global";
import { Box, Image } from "@chakra-ui/react";

const MovieCard = ({ movie }: { movie: MoviePlayingResponse }) => {
  return (
    <Box>
      <Image
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </Box>
  );
};

export default MovieCard;
