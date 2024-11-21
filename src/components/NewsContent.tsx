import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IonContent, IonToast } from "@ionic/react";
import { AppDispatch, RootState } from "../store";
import { fetchNews, setCategory, setNotification } from "../store/newsSlice";
import Category from "./Category";
import CategoryTitle from "../components/CategoryTitle";
import NewsGrid from "../components/NewsGrid";

const NewsContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.news.articles);
  const category = useSelector((state: RootState) => state.news.category);
  const notification = useSelector(
    (state: RootState) => state.news.notification
  );

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  const handleCategoryChange = (newCategory: string) => {
    dispatch(setCategory(newCategory));
    dispatch(fetchNews(newCategory));
  };

  return (
    <>
      <Category onCategoryChange={handleCategoryChange} />
      <IonContent>
        <CategoryTitle category={category} />
        <NewsGrid
          articles={articles}
          truncateText={(
            text: string | null | undefined,
            limit: number | undefined
          ) => {
            if (!text) return "";
            return text.split(" ").slice(0, limit).join(" ") + "...";
          }}
        />
      </IonContent>
    </>
  );
};

export default NewsContent;
