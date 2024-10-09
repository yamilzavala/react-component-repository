import "./styles.css";
import { useState, useEffect } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";
import ShimmerSkeletonSummary from "./components/ShimmerSkeletonSummary";
const url = "https://www.course-api.com/react-tabs-project";

import { dataComponents } from "./data/data";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Failed fetching data");
      }
      const dataResp = await resp.json();
      console.log(dataResp);
      setData(dataResp);
    } catch (error) {
      setError(error);
      console.log("Error fetching data - ", error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // if (loading)
  //   return (
  //     <section className="jobs-center">
  //       <div className="loading"></div>
  //     </section>
  //   );

  return (
    <section className="jobs-center">
      {!loading ? (
        <>
          <BtnContainer
            // jobs={data}
            tabs={dataComponents}
            setCurrentItem={setCurrentItem}
            currentItem={currentItem}
          />
          {data.length && (
            <JobInfo data={dataComponents} currentItem={currentItem} />
          )}
        </>
      ) : (
        <ShimmerSkeletonSummary />
      )}
    </section>
  );
}
