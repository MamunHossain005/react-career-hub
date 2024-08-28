import { useState } from 'react';
import { getItemFromLocalStorage } from '../../utilities/localStorage.js'
import AppliedJob from '../AppliedJob/AppliedJob.jsx';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    const [click, setClick] = useState(false);
    const storageJobs = getItemFromLocalStorage();
    const [filteredJobs, setFilteredJobs] = useState(storageJobs);

    const handleFilter = val => {
        const onsiteJobs = storageJobs.filter(job => job.remote_or_onsite === val);
        setFilteredJobs(onsiteJobs);
    }

    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            <h2 className='text-2xl font-bold text-center mb-10'>Applied Jobs</h2>
            <div className='text-right mb-2'>
                <details className="dropdown" onClick={() => setClick(!click)}>
                    <summary className="btn m-1">Filter By {!click ? <FaAngleDown /> : <FaAngleUp />} </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                        <li><a onClick={() => setFilteredJobs(storageJobs)}>All</a></li>
                        <li><a onClick={() => handleFilter("Onsite")}>Onsite</a></li>
                        <li><a onClick={() => handleFilter("Remote")}>Remote</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {storageJobs.length === 0 ? <p className='text-2xl font-bold text-center mb-10 text-red-500'>You have not applied any Job!</p> : filteredJobs.map((job, idx) => <AppliedJob key={idx} job={job}></AppliedJob>)}
            </div>
        </div>
    );
};

export default AppliedJobs;