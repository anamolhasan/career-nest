import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobApplicationRow = ({application, index}) => {
    const {company, title, company_logo, jobId, _id, 
applicant} = application;
    // console.log(company, title, company_logo)

    const handleDeleted = () => {
           console.log(_id,applicant)

           
    }
  return (
    <tr className="hover:bg-base-100 transition">
      {/* Index */}
      <th className="text-center font-semibold">{index + 1}</th>

      {/* Company Info */}
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={company_logo || "/default-logo.png"}
                alt={company}
              />
            </div>
          </div>
          <div>         
            <p className="font-bold">{company}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </td>

       <td className='font-bold'> Zemlak, Daniel and Leannon<br /><span className="badge badge-ghost badge-sm ">Desktop Support Technician</span> </td>

      {/* Job Badge */}
      <td>
        <span className="badge badge-outline badge-primary">
          Applied
        </span>
      </td>

      {/* Details */}
      <td className="text-center">
        <Link
          to={`/jobs/${jobId}`}
          className="btn btn-xs btn-outline btn-info"
        >
          View
        </Link>
      </td>

      {/* Delete */}
      <td className="text-center">
        <button
          onClick={() => handleDeleted(application._id)}
          className="btn btn-xs btn-error btn-outline"
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  )
}

export default JobApplicationRow