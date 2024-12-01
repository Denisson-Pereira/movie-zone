import { AxiosError } from "axios";
import { IMovies } from "../models/IMovies";
import { api } from "./tmdbConnection";


export const getRecommendedMovies = async (): Promise<IMovies[]> => {
  try {
    const { data } = await api.get("movie/popular", {
      params: {
        language: "pt-BR",  // Altere para outro idioma, se necessário
        page: 1,  // Número da página para controle da paginação
      },
    });

    if (data && data.results) {
      const movies: IMovies[] = data.results;
      return movies;
    } else {
      return [];
    }
  } catch (error: AxiosError | any) {
    console.error("Error fetching recommended movies:", error.response || error);
    return [];
  }
};
