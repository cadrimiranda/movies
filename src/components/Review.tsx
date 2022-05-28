import { AuthorDetails } from "../hooks/useGetMoviewReviews";
import { StarIcon } from "@chakra-ui/icons";
import { Text, Flex, Box, Divider } from "@chakra-ui/react";

const Review = ({ author }: { author: AuthorDetails }) => {
  const normalize = ((author.author_details.rating || 0 - 0) / (10 - 0)) * 5;

  const getDate = (date: string) => new Date(date).toLocaleDateString();

  return (
    <Flex direction="column">
      <Box display="flex">
        <Text as="h3" fontSize="l" fontWeight="bold">
          {author.author}
        </Text>
        <Text ml={2} fontSize="l" fontWeight="bold">
          &bull; {author.author_details.username}
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              fontSize="xs"
              key={i}
              color={i < normalize ? "yellow.300" : "gray.300"}
            />
          ))}
        <Box
          color="gray.500"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          ({author.author_details.rating || 1})
        </Box>
      </Box>
      <Text
        mb={1}
        color="gray.500"
        fontSize="smaller"
        textAlign="justify"
        as="span"
      >
        created: {getDate(author.created_at)} &bull; updated:{" "}
        {getDate(author.created_at)}
      </Text>
      <Text mb={3} textAlign="justify" as="p">
        {author.content}
      </Text>

      <Divider mb={3} mt={3} />
    </Flex>
  );
};

export default Review;
