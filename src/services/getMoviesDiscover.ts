import { AxiosError } from "axios";
import { IMovies } from "../models/IMovies";
import { api } from "./tmdbConnection";

const API_KEY = "acc52bd1b22703336fe1f82c94a4c2d9";

export const getMoviesDiscover = async () => {
    try {
      const {data} = await api.get(
        "discover/movie", {
        params: {
          api_key: API_KEY,
          language: "pt-BR",
          page: 1,
        },
      });
      const moviesDiscover: IMovies[] = data.results
      return moviesDiscover;
    
    } catch ({ response }: AxiosError | any) {
      console.log(response);
    }
  };