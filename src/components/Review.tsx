import { AuthorDetails } from "../hooks/useGetMoviewReviews";
import { Text, Flex, Box, Divider } from "@chakra-ui/react";
import Rating from "./Rating";

const Review = ({ author }: { author: AuthorDetails }) => {
  const getDate = (date: string) => new Date(date).toLocaleDateString();

  return (
    <Flex direction="column">
      <Box display="flex">
        <Text as="h3" fontSize={{ base: "md", xl: "l" }} fontWeight="bold">
          {author.author}
        </Text>
        <Text ml={2} fontSize={{ base: "md", xl: "l" }} fontWeight="bold">
          &bull; {author.author_details.username}
        </Text>
      </Box>
      <Rating
        rate={author.author_details.rating || 0}
        fontSize={{ base: "xs", xl: "l" }}
      />

      <Text
        mb={1}
        color="gray.500"
        fontSize={{ base: "xs", xl: "smaller" }}
        textAlign="justify"
        as="span"
      >
        created: {getDate(author.created_at)} &bull; updated:{" "}
        {getDate(author.created_at)}
      </Text>
      <Text
        mb={3}
        textAlign="justify"
        fontSize={{ base: "xs", xl: "smaller" }}
        as="p"
      >
        {author.content}
      </Text>

      <Divider mb={3} mt={3} />
    </Flex>
  );
};

export default Review;
