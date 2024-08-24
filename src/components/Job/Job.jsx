import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="shadow-lg p-5 rounded-lg">
            <img src={logo} alt="company Image" width={90} />
            <h3 className="text-2xl font-semibold">{job_title}</h3>
            <h4 className="text-xl">{company_name}</h4>
            <div className="flex gap-4 mt-4">
                <button className="px-4 py-1 rounded-md border border-blue-400 font-bold">{remote_or_onsite}</button>
                <button className="px-4 py-1 rounded-md border border-blue-400 font-bold">{job_type}</button>
            </div>
            <div className="flex gap-7 mt-2">
                <p className="flex items-center gap-1"><IoLocationOutline /> <span>{location}</span></p>
                <p className="flex items-center gap-1"><AiOutlineDollar /> <span>Salary: {salary}</span></p>
            </div>
            <Link to={`/details/${id}`}><button className="bg-blue-500 text-white px-6 py-1 rounded-lg mt-2">View Details</button></Link>
        </div>
    );
};

export default Job;