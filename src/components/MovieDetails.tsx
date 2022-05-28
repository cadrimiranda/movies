import {
  Box,
  SimpleGrid,
  GridItem,
  Flex,
  Image,
  Divider,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MoviePlayingResponse } from "../types/global";
import useGetMoviewReview from "../hooks/useGetMoviewReviews";
import Review from "./Review";
import Rating from "./Rating";

type MovieDetailsType = {
  movie: MoviePlayingResponse;
};

const MovieDetails = ({ movie }: MovieDetailsType) => {
  const { data, loadingComments } = useGetMoviewReview(movie.id);
  const normalize = ((movie.vote_average - 0) / (10 - 0)) * 5;

  return (
    <Box>
      <SimpleGrid columns={5}>
        <GridItem colSpan={2}>
          <Flex align="center" justify="center">
            <Image
              m={3}
              height="500px"
              width="auto"
              loading="lazy"
              src={movie.poster_path}
              alt={movie.title}
              title={movie.overview}
            />
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Text
            mt={1}
            color="gray.700"
            fontWeight="bold"
            as="h1"
            fontSize="2xl"
            lineHeight="tight"
            title={movie.title}
            wordBreak="break-word"
            mb={4}
          >
            {movie.title}
          </Text>

          <Rating
            text={
              <>
                ({movie.vote_average}) &bull; {movie.vote_count} reviews
              </>
            }
            rate={movie.vote_average}
            fontSize="l"
          />

          <Text
            mt={1}
            textAlign="justify"
            as="p"
            fontSize="xl"
            lineHeight="tight"
            title={movie.title}
          >
            {movie.overview}
          </Text>
          <Divider mb={3} mt={5} />
          <Box pr={3} maxHeight="35vh" overflow="scroll">
            <Text as="h2">Comments &bull; ({data?.results.length || 0})</Text>
            {data?.results.map((author) => (
              <Review author={author} />
            ))}
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default MovieDetails;
