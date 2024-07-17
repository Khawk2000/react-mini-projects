import { useState } from "react";
import "./App.css";
import FetchJobs from "./FetchJobs";
import Job from "./Job.jsx";
import JobsPagination from "./JobsPagination.jsx";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  var start, end;

  const { jobs, loading, error } = FetchJobs(params);
  start = (page - 1) * 5;
  end = page * 5;
  var pJobs = Object.entries(jobs)
    .slice(start, end)
    .map((entry) => entry[1]);

  return (
    <div className="container my-4">
      <h1 className="mb-4 mx-auto text-center">Gov Jobs</h1>
      <JobsPagination page={page} setPage={setPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      {pJobs.map((job) => {
        return <Job key={job.MatchedObjectId} job={job} />;
      })}
    </div>
  );
}

export default App;
