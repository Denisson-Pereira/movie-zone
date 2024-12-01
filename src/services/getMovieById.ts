import { IMovies } from '../models/IMovies'; 
import { api } from './tmdbConnection';

export const getMovieById = async (movieId: number): Promise<IMovies | null> => {
  try {
    const { data } = await api.get(`movie/${movieId}`, {
      params: {
        language: "pt-BR"
      }
    });
    return data;
  } catch (error) {
    console.error("Erro ao pegar filme por ID:", error);
    return null;
  }
};
