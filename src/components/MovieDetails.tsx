import {
  Box,
  SimpleGrid,
  GridItem,
  Flex,
  Image,
  Divider,
  Text,
} from "@chakra-ui/react";
import { MovieResponse } from "../types/global";
import useGetMoviewReview from "../hooks/useGetMoviewReviews";
import Review from "./Review";
import Rating from "./Rating";

type MovieDetailsType = {
  movie: MovieResponse;
};

const MovieDetails = ({ movie }: MovieDetailsType) => {
  const { data } = useGetMoviewReview(movie.id);

  return (
    <Box>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 5,
        }}
      >
        <GridItem
          colSpan={{
            sm: 1,
            lg: 2,
          }}
        >
          <Flex align="center" justify="center">
            <Image
              m={{
                base: 0,
                lg: 3,
              }}
              height={{
                base: "150px",
                sm: "300px",
                lg: "500px",
              }}
              width={{
                lg: "auto",
              }}
              loading="lazy"
              src={movie.poster_path}
              alt={movie.title}
              title={movie.overview}
            />
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{
            md: 1,
            lg: 3,
          }}
        >
          <Text
            mt={1}
            color="gray.700"
            fontWeight="bold"
            as="h1"
            fontSize={{ base: "sm", lg: "2xl" }}
            lineHeight="tight"
            title={movie.title}
            noOfLines={2}
            wordBreak="break-all"
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
            fontSize={{ base: "sm", lg: "l" }}
          />

          <Text
            mt={1}
            textAlign="justify"
            as="p"
            fontSize={{ base: "sm", lg: "xl" }}
            lineHeight="tight"
            title={movie.title}
          >
            {movie.overview}
          </Text>
          <Divider mb={3} mt={5} />
          <Text fontSize={{ base: "smaller", lg: "md" }} as="h2">
            Comments &bull; ({data?.results.length || 0})
          </Text>
          <Box
            pr={3}
            maxHeight={{ base: "200px", lg: "35vh" }}
            overflow="scroll"
          >
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
