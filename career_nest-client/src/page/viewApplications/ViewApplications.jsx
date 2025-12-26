import axios from 'axios'
import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import Swal from 'sweetalert2'

const ViewApplications = () => {
    const {job_id} = useParams()
    const applications = useLoaderData()

    const handleStatusChange = (e, app_id) => {
        axios.patch(`https://career-nest-server-psi.vercel.app/applications/${app_id}`, {status: e.target.value})
          .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount){
                Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Application status updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
            }
          })
          .catch(err => console.log(err))
    }

    
  return (
    <div className="max-w-6xl mx-auto p-6">
  <h2 className="text-4xl font-bold mb-6">
    {applications.length} Applications
    <span className="text-base font-normal text-gray-500 ml-2">
      (Job ID: {job_id})
    </span>
  </h2>

  <div className="overflow-x-auto bg-base-100 shadow-xl rounded-xl">
    <table className="table table-zebra">
      {/* head */}
      <thead className="bg-base-200">
        <tr>
          <th>#</th>
          <th>Applicant</th>
          <th>Job Title</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {applications.map((application, index) => (
          <tr key={application._id} className="hover">
            <th>{index + 1}</th>

            {/* Applicant */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={application.photoURL || "/avatar.png"}
                      alt={application.applicant}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{application.applicant}</p>
                  <p className="text-sm text-gray-500">
                    {application.email}
                  </p>
                </div>
              </div>
            </td>

            {/* Job title */}
            <td>
              <span className="badge badge-outline badge-info">
                {application.job_title || "Job Position"}
              </span>
            </td>

            {/* Status */}
            <td>
              <select
                onChange={(e) =>
                  handleStatusChange(e, application._id)
                }
                defaultValue={application.status}
                className={`select select-sm font-semibold
                  ${
                    application.status === "Pending"
                      ? "select-warning"
                      : application.status === "Interview"
                      ? "select-info"
                      : application.status === "Hired"
                      ? "select-success"
                      : "select-error"
                  }
                `}
              >
                <option disabled>Update Status</option>
                <option>Pending</option>
                <option>Interview</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default ViewApplications