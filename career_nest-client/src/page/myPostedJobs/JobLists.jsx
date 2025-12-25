import React, { use } from 'react'
import { Link } from 'react-router'

const JobLists = ({jobsByCreatedByPromise}) => {
    const jobs = use(jobsByCreatedByPromise)
    console.log(jobs)
  return (
    <div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold mb-6 text-center">
    📝 Jobs Created by You: {jobs.length}
  </h2>

  <div className="overflow-x-auto rounded-lg shadow-lg border border-base-300">
    <table className="table w-full">
      <thead className="bg-primary text-white">
        <tr>
          <th className="text-center">#</th>
          <th>Job Title</th>
          <th className="text-center">Deadline</th>
          <th className="text-center">Applications</th>
          <th className="text-center">View</th>
        </tr>
      </thead>

      <tbody>
        {jobs.map((job, index) => (
          <tr key={job._id} className="hover:bg-base-200 transition-colors">
            <th className="text-center">{index + 1}</th>
            <td className="font-medium">{job.title}</td>
            <td className="text-center">{new Date(job.deadline).toLocaleDateString()}</td>
            <td className="text-center">{job.application_count || 0}</td>
            <td className="text-center">
              <Link
                to={`/applications/${job._id}`}
                className="btn btn-sm btn-outline btn-primary"
              >
                View Applications
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default JobLists