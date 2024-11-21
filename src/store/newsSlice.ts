import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsByCategory } from "../services/api";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (category: string) => {
    try {
      const articles = await getNewsByCategory(category);
      return articles; 
    } catch (error) {
      throw new Error("Failed to fetch news");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [], 
    category: "general", 
    notification: null, 
    status: "idle",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload; 
    },
    setNotification: (state, action) => {
      state.notification = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded"; 
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "failed"; 
        // state.notification = "Failed to fetch news"; 
      });
  },
});

// Eylemler ve dilimi dışa aktarma
export const { setCategory, setNotification } = newsSlice.actions;
export default newsSlice.reducer;
