import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`,
  },
});

export const getNewsByCategory = async (category: string) => {
  const response = await api.get(`/top-headlines`, {
    params: {
      category,
      country: "us",
    },
  });
  return response.data.articles;
};
