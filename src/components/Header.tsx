import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "../components/styles/Header.css";
import Line from "./Line";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle className="app-title">
          The <span className="highlight-news">NEWS</span> App
        </IonTitle>
        <div className="line-container">
          <Line lineWidth="70px" lineHeight={2} />
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
