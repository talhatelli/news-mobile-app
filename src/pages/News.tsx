import React from "react";
import { IonPage } from "@ionic/react";
import Header from "../components/Header";
import NewsContent from "../components/NewsContent";

const Chart: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <NewsContent />
    </IonPage>
  );
};

export default Chart;
