import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
} from "@ionic/react";
import "../components/styles/NewsGrid.css";
import { warning } from "ionicons/icons";

interface NewsGridProps {
  articles: Array<{
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
  }>;
  truncateText: (text: string, limit: number) => string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles, truncateText }) => {
  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <IonCard key={index} className="news-card">
          {article.urlToImage ? (
            <IonImg
              src={article.urlToImage}
              alt={article.title}
              className="news-image"
            />
          ) : (
            <div className="placeholder-image">No Image</div>
          )}
          <IonCardHeader>
            <IonCardTitle className="news-title">{article.title}</IonCardTitle>
            <p className="news-source">{article.source.name}</p>
          </IonCardHeader>
          <IonCardContent>
            <p className="news-description">
              {truncateText(
                article.description || "No description available",
                20
              )}
            </p>
            <IonButton
              expand="block"
              color={"warning"}
              className="read-more-button"
              onClick={() => window.open(article.url, "_blank")}
            >
              Read More
            </IonButton>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};

export default NewsGrid;
