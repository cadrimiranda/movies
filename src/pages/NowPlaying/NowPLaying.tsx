import { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import useFetch from "use-http";
import { GetNowPlayingResponse } from "../../types/global";
import { Box, Image, SimpleGrid, GridItem } from "@chakra-ui/react";
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
    <SimpleGrid columns={8}>
      {data?.results.map((movie) => {
        return (
          <GridItem>
            <MovieCard movie={movie} />
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};

export default NowPlaying;
