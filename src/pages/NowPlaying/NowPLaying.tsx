import { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import useFetch from "use-http";
import { GetNowPlayingResponse } from "../../types/global";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";

const NowPlaying = () => {
  const {
    get: getNowPlaying,
    data,
    loading,
  } = useFetch<GetNowPlayingResponse>("/movie/now_playing?language=en-US");

  useEffect(() => {
    getNowPlaying();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 4,
        xl: 6,
        "2xl": 6,
      }}
      gap={4}
    >
      {data?.results.map((movie) => {
        return (
          <GridItem>
            <MovieCard movie={movie} isFavorite={false} />
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};

export default NowPlaying;
