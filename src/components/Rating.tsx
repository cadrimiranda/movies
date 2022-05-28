import { StarIcon } from "@chakra-ui/icons";
import { Text, Box, HTMLChakraProps } from "@chakra-ui/react";

interface IRating extends Omit<HTMLChakraProps<"div">, "text"> {
  rate: number;
  text?: any;
}

const Rating = ({ rate, fontSize, text, ...rest }: IRating) => {
  const normalize = ((rate - 0) / (10 - 0)) * 5;

  return (
    <Box display="flex" alignItems="center" {...rest}>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            fontSize={fontSize}
            key={i}
            color={i < normalize ? "yellow.300" : "gray.300"}
          />
        ))}
      <Text
        color="gray.500"
        letterSpacing="wide"
        fontSize={fontSize}
        textTransform="uppercase"
        ml="2"
      >
        {text ? `(${rate})` : text}
      </Text>
    </Box>
  );
};

export default Rating;
