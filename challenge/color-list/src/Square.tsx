import { memo } from "react";
import { Color } from "./App";

type SqureProps = {
  color: Color;
  handleClick: (color: Color) => void;
};

const Square = memo(({ color, handleClick }: SqureProps) => {
  const styles = {
    backgroundColor: color.value,
    width: "20px",
    height: "20px",
    cursor: "pointer",
    margin: "10px auto",
  };
  return <div style={styles} onClick={() => handleClick(color)} />;
});

export default Square;
