import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJob = ({ job }) => {
    const { id ,logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="border p-4 grid md:grid-cols-5 gap-4 mb-6 rounded-lg">
            <div className="bg-gray-100 flex items-center justify-center h-[200px] rounded-lg">
                <img className="w-28" src={logo} alt="" />
            </div>
            <div className="md:col-span-4 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{job_title}</h3>
                    <h4 className="text-lg">{company_name}</h4>
                    <div className="flex gap-4 mt-4">
                        <button className="px-4 py-1 rounded-md border border-blue-400 font-bold">{remote_or_onsite}</button>
                        <button className="px-4 py-1 rounded-md border border-blue-400 font-bold">{job_type}</button>
                    </div>
                    <div className="flex gap-7 mt-2">
                        <p className="flex items-center gap-1"><IoLocationOutline /> <span>{location}</span></p>
                        <p className="flex items-center gap-1"><AiOutlineDollar /> <span>Salary: {salary}</span></p>
                    </div>
                </div>
                <Link to={`/details/${id}`}><button className="bg-blue-500 text-white px-6 py-1 rounded-lg mt-2">View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJob;