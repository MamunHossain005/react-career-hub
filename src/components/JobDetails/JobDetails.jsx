import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setItemInLocalStorage, getItemFromLocalStorage} from '../../utilities/localStorage.js'

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;

    const handleApply = () => {
        const storageJobs = getItemFromLocalStorage();
        if(storageJobs.find(StorageJob => StorageJob.id === intId)){
            toast.error("You have already applied in the job.");
        }
        else {
            setItemInLocalStorage(job);
            toast.success("Wow you applied job!");
        }
    }

    return (
        <div className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-16">Job Details</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <p className="mb-4"><span className="font-bold text-lg">Job Description:</span> {job_description}</p>
                    <p className="mb-4"><span className="font-bold text-lg">Job Responsibility:</span> {job_responsibility}</p>
                    <h3 className="font-bold text-lg">Educational Requirements:</h3>
                    <p className="mb-4">{educational_requirements}</p>
                    <h3 className="font-bold text-lg">Experiences:</h3>
                    <p className="mb-4">{experiences}</p>
                </div>
                <div className="bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-2">Job Details</h2>
                    <hr className="border border-gray-400 mb-4" />
                    <div className="flex items-center gap-2 ">
                        <AiOutlineDollar className="text-purple-600"/>
                        <p className="text-gray-600"><span className="font-bold text-black">Salary:</span> {salary} (Per Month)</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <PiSuitcaseSimpleThin className="text-purple-600"/>
                        <p className="text-gray-600"><span className="font-bold text-black">Job Title:</span> {job_title}</p>
                    </div>
                    <h2 className="text-lg font-bold mb-2">Contact Information</h2>
                    <div className="flex items-center gap-2 ">
                        <LuPhone className="text-purple-600"/>
                        <p className="text-gray-600"><span className="font-bold text-black">Phone:</span> {contact_information.phone}</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <MdOutlineMailOutline className="text-purple-600"/>
                        <p className="text-gray-600"><span className="font-bold text-black">Email:</span> {contact_information.email}</p>
                    </div>
                    <div className="flex items-start">
                        <IoLocationOutline className="text-purple-600 w-9 relative top-1 -left-2"/>
                        <p className="text-gray-600 relative -left-2"><span className="font-bold text-black">Address:</span> {contact_information.address}</p>
                    </div>
                    <button onClick={handleApply} className="w-full bg-gradient-to-l from-pink-500 to-purple-500 py-2 font-bold text-white rounded-lg mt-4">Apply Now</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;