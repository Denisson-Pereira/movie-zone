import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjRkZWI1M2YzOGMxNTk3YTgwMzNiMDE3ZjcxNTBiYyIsIm5iZiI6MTczMjcyMDI1Ny40MDg2NTE2LCJzdWIiOiI2NzQ3MzVjYzAyNjY4MmI5MmViMDc3YzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.O5M9tgMMjdJesAPW2pyFuntPpQj0enOjZ-1WsjGvG3M",
    },
  
  });