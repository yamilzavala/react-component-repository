import "./styles.css";
import { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./Dashboard"));

const Home = () => {
  return <div>Home</div>;
};

export default function App() {
  return (
    <div>
      <h1>Lazy loading</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
