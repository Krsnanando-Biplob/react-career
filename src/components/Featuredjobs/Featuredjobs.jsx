import { useEffect, useState } from "react";
import Job from "../job/Job";

const Featuredjobs = () => {
  const [jobs, setjobs] = useState([]);
  const [dataLength, setdataLength] = useState(4)
  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setjobs(data))
  }, [])

  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-center font-bold text-6xl">Featured Jobs</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
          jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className="flex justify-center items-center my-6">
        <div className={dataLength === jobs.length && 'hidden'} >
          <button
            onClick={() => setdataLength(jobs.length)}
            className="btn btn-primary">show all jobs</button>
        </div>
      </div>
    </div>

  );
};

export default Featuredjobs;