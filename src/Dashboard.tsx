import { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import useFetch from "use-http";
import { GetNowPlayingResponse } from "./types/global";

const Dashboard = () => {
  const {
    get: getNowPlaying,
    data,
    loading,
  } = useFetch<GetNowPlayingResponse>(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US"
  );

  useEffect(() => {
    getNowPlaying();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return <Flex>{data?.total_results}</Flex>;
};

export default Dashboard;
