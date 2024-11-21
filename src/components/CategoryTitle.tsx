import React from "react";
import Line from "./Line";

interface CategoryTitleProps {
  category: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ category }) => {
  const lineWidth = category.length * 9;

  return (
    <div
      style={{
        fontSize: "1em",
        fontWeight: "bold",
        marginTop: "20px",
        marginLeft: "20px",
        textAlign: "left",
      }}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
      <Line lineWidth={lineWidth} lineHeight={2} />
      <Line lineWidth={lineWidth} lineHeight={2} />
    </div>
  );
};

export default CategoryTitle;
