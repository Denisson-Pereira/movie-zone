import { IMovies } from '../models/IMovies'; 
import { api } from './tmdbConnection';

export const getMovieById = async (movieId: number): Promise<IMovies | null> => {
  try {
    const response = await api.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao pegar filme por ID:", error);
    return null;
  }
};
