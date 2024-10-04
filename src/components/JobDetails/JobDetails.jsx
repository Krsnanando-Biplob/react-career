import { AiOutlineDollarCircle, AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
  // const { job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email, address } = JOb
  const jobs = useLoaderData();
  const { id } = useParams()
  const parId = parseInt(id)
  const job = jobs.find(job => job.id === parId)
  console.log(job)

  const handApplyJob = () =>{
    toast(' You have applyed job successfuly ')
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-center pb-2 underline"> Job Details: {id} </h3>
      <div className="grid md:grid-cols-5 gap-4 md:my-4">
        <div className="grid gap-6 md:col-span-3">
          <p> <span className="font-bold">Job description: </span> {job.job_description} </p>
          <p> <span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
          <h2><span className="font-bold">Educational Requirements:</span>
            <p> {job.educational_requirements} </p>
          </h2>
          <h2> <span className="font-bold">Experiences:</span>
            <p>{job.experiences}</p>
          </h2>
        </div>
        <div className=" md:col-span-2 ">
          <div className="border px-4 py-4 bg-purple-100">
            <div>
              <h2 className="font-bold pb-4 border-b-2 border-black">Job Details</h2>
              <h2 className="flex my-4 text-center gap-2"> <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>  Salary: {job.salary}(Per Month) </h2>
            </div>
            <div>
              <h2 className="font-bold pb-4 border-b-2 border-black">Contact Information</h2>
              <p className="mt-4 flex gap-2"> <MdOutlinePhone className="text-2xl"></MdOutlinePhone>
                <span className="font-bold">Phone: </span>{job.contact_information.phone}
              </p>
              <h2 className="flex gap-2">
                <AiOutlineMail className="text-2xl"></AiOutlineMail>
                <span className="font-bold">Email: </span>{job.contact_information.email}
              </h2>
              <h2 className="flex gap-2">
                <CiLocationOn className="text-2xl "></CiLocationOn>
                <span>Address:</span> {job.contact_information.address}
              </h2>
            </div>
          </div>
          <div>
            <Link> <button onClick={handApplyJob} className="btn w-full my-4 mt-4 btn-primary">Apply Now</button> </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;