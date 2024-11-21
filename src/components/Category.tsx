import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import "../components/styles/Category.css";

interface CategoryProps {
  onCategoryChange: (newCategory: string) => void;
}

const Category: React.FC<CategoryProps> = ({ onCategoryChange }) => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleSegmentChange = (event: CustomEvent) => {
    const selectedCategory = event.detail.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <IonSegment
      onIonChange={handleSegmentChange}
      className="category-segment"
      scrollable
    >
      {categories.map((category) => (
        <IonSegmentButton key={category} value={category}>
          <IonLabel>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default Category;

// import React from 'react';

// interface CategoryProps {
//   onCategoryChange: (newCategory: string) => void;
// }

// const Category: React.FC<CategoryProps> = ({ onCategoryChange }) => {
//   const categories = [
//     "general", "business", "entertainment", "health", "science", "sports", "technology"
//   ];

//   return (
//     <div>
//       <label htmlFor="category">Select Category: </label>
//       <select
//         id="category"
//         onChange={(e) => onCategoryChange(e.target.value)}
//       >
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Category;
