import { AxiosError } from "axios";
import { IMovies } from "../models/IMovies";
import { api } from "./tmdbConnection";

export const searchMoviesByName = async (searchTerm: string): Promise<IMovies[]> => {
  try {
    const { data } = await api.get("search/movie", {
      params: {
        query: searchTerm,  
        language: "pt-BR",  
        page: 1,           
      },
    });

    if (data && data.results) {
      const movies: IMovies[] = data.results;
      return movies;
    } else {
      return [];
    }
  } catch (error: AxiosError | any) {
    console.error("Error fetching movies by name:", error.response || error);
    return [];
  }
};
