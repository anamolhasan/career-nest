import React from 'react'
import { Link } from 'react-router';

const JobApplicationRow = ({application, index}) => {
    const {company, title, company_logo, jobId, _id, 
applicant} = application;
    // console.log(company, title, company_logo)

    const handleDeleted = () => {
           console.log(_id,applicant)

           
    }
  return (
     <tr>
            <th>
                <label>
                   {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo || '/default-logo'} 
                                alt={company} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td className='btn btn-link'>
                 <Link to={`/jobs/${jobId}`} >details</Link>
            </td>
            <th>
                <button onClick={handleDeleted} className="btn btn-warning btn-xs">delete</button>
            </th>
        </tr>
  )
}

export default JobApplicationRow