export type MovieResponse = {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type MoviesResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieResponse[];
  total_pages: number;
  total_results: number;
};
