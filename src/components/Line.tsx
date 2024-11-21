import React from "react";

interface LineProps {
  lineWidth: number;
  lineHeight: number;
}

const Line: React.FC<LineProps> = ({ lineWidth, lineHeight }) => {
  return (
    <div
      style={{
        width: lineWidth,
        height: `${lineHeight}px`,
        backgroundColor: "#FF9F1C",
        marginTop: "4px",
      }}
    />
  );
};

export default Line;
