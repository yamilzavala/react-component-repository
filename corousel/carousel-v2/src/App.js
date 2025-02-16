import "./styles.css";
import ImageCarousel from "./components/ImageCarousel";
import { images } from "./data/data";

export default function App() {
  return (
    <div className="wrapper">
      <ImageCarousel images={images} />
    </div>
  );
}
