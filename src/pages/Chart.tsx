import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IonContent, IonPage } from "@ionic/react";
import { Line, Pie } from "react-chartjs-2"; // Use Pie chart
import Category from "../components/Category";
import CategoryTitle from "../components/CategoryTitle";
import { RootState } from "../store";
import { fetchNews, setCategory } from "../store/newsSlice";
import Header from "../components/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const NewsAnalyticsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: any) => state.news);
  const category = useSelector((state: RootState) => state.news.category);

  const getNewsDistributionByHours = () => {
    const hourCounts: { [key: string]: number } = {};

    articles.forEach((article: any) => {
      const hour = new Date(article.publishedAt).getHours();
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });

    const hours = Array.from({ length: 24 }, (_, index) => index);
    const counts = hours.map((hour) => hourCounts[hour] || 0);

    return { hours, counts };
  };

  const { hours, counts } = getNewsDistributionByHours();

  const getNewsDistributionBySources = () => {
    const sourceCounts: { [key: string]: number } = {};

    articles.forEach((article: any) => {
      const source = article.source.name;
      sourceCounts[source] = (sourceCounts[source] || 0) + 1;
    });

    const sources = Object.keys(sourceCounts);
    const countsBySource = sources.map((source) => sourceCounts[source]);

    return { sources, countsBySource };
  };

  const { sources, countsBySource } = getNewsDistributionBySources();

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  const hoursChartData = {
    labels: hours.map((hour) => `${hour}:00`),
    datasets: [
      {
        label: "News Distribution by Hours",
        data: counts,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
    ],
  };

  const sourcesChartData = {
    labels: sources,
    datasets: [
      {
        data: countsBySource,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const handleCategoryChange = (newCategory: string) => {
    dispatch(setCategory(newCategory));
    dispatch(fetchNews(newCategory));
  };

  return (
    <IonPage>
      <Header />
      <Category onCategoryChange={handleCategoryChange} />

      <IonContent>
        <CategoryTitle category={category} />
        <div style={{ margin: "30px" }}>
          <span>News Distribution by Hours</span>
          <Line data={hoursChartData} options={{ responsive: true }} />
        </div>
        <div style={{ margin: "30px" }}>
          <h4>News Distribution by Sources</h4>
          <Pie data={sourcesChartData} options={{ responsive: true }} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewsAnalyticsPage;
