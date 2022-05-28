import { useEffect, useState } from "react";
import useFetch from "use-http";

export type AuthorDetails = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

type MovieReviewResponse = {
  id: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: AuthorDetails[];
};

const useGetMoviewReview = (movieId: number) => {
  const {
    get,
    loading: loadingComments,
    data,
  } = useFetch<MovieReviewResponse>(`/movie/${movieId}/reviews`);

  useEffect(() => {
    get();
  }, [movieId]);

  return { data, loadingComments };
};

export default useGetMoviewReview;
