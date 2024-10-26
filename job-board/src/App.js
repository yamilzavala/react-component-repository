import { useState, useEffect, useRef } from "react";
import JobDetails from "./components/JobDetails";
import "./App.css";

const baseUrlJobsId = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const baseUrlJobs = "https://hacker-news.firebaseio.com/v0/item/";
const PAGE_SIZE = 6;

const App = () => {
  const [page, setPage] = useState(0);
  const [jobIds, setJobIds] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [fetchingJobs, setFetchingJobs] = useState(false);
  const isMounted = useRef(true);

  //race conditions
  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  //fetch jobs details
  useEffect(() => {
    fetchJobsDetails();
  }, [page]);

  const fetchJobIds = async () => {
    let jobs = jobIds;
    if (!jobs) {
      try {
        const resp = await fetch(baseUrlJobsId);
        jobs = await resp.json();
        //validate race condition
        if (!isMounted.current) {
          return;
        }
        setJobIds(jobs);
      } catch (error) {
        console.log("An error ocurred fetching ids: ", error?.message);
      }
    }
    return jobs.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  };

  const fetchJobsDetails = async () => {
    const currItems = await fetchJobIds();
    try {
      setFetchingJobs(true);
      const jobPromises = currItems.map((id) => {
        return fetch(`${baseUrlJobs}${id}.json`).then((resp) => resp.json());
      });
      const jobsData = await Promise.all(jobPromises);

      //validate race condition
      if (!isMounted.current) {
        return;
      }
      setJobs([...jobs, ...jobsData]);
    } catch (error) {
      console.log("An error ocurred fetching details: ", error?.message);
    } finally {
      setFetchingJobs(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Hacker News Jobs Board</h1>
      {jobIds === null ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <div className="jobs" role="list">
            {jobs.map((job) => {
              return <JobDetails key={job.id} {...job} />;
            })}
          </div>
          {page < jobIds?.length / PAGE_SIZE && (
            <button
              className="load-more-button"
              disabled={fetchingJobs}
              onClick={() => setPage(page + 1)}
            >
              {fetchingJobs ? "Fetching..." : "Load More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
