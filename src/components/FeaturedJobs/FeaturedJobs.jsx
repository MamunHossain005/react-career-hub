import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className="mb-6">
            <h2 className="text-5xl mb-4 text-center">Featured Job: {jobs.length}</h2>
            <p className="mb-8 text-center">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className="grid grid-cols-2 gap-7">
                {seeAll ? jobs.map(job => <Job key={job.id} job={job}></Job>) : jobs.slice(0, 4).map(job => <Job key={job.id} job={job}></Job>)}
            </div>
            <div className={`text-center mt-6 ${seeAll && "hidden"}`}>
                <button onClick={() => setSeeAll(!seeAll)} className="bg-blue-500 text-white px-6 py-1 rounded-lg">See All Jobs</button>
            </div>
            <div className={`text-center mt-6 ${!seeAll && "hidden"}`}>
                <button onClick={() => setSeeAll(!seeAll)} className="bg-blue-500 text-white px-6 py-1 rounded-lg">Show Less</button>
            </div> 
        </div>
    );
};

export default FeaturedJobs;