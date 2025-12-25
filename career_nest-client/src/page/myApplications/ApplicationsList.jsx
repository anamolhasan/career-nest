import React, { use } from 'react'
import JobApplicationRow from './JobApplicationRow'

const ApplicationsList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise)
    console.log(applications)
  return (
    <div className="max-w-6xl mx-auto p-6 mb-16">
  <h3 className="text-3xl font-bold mb-6 text-center">
    📄 Jobs Applied So Far: {applications.length}
  </h3>

  <div className="overflow-x-auto rounded-xl shadow-lg border border-base-300">
    <table className="table w-full">
      <thead className="bg-base-200">
        <tr>
          <th className="text-center">#</th>
          <th>Company</th>
          <th>Position</th>
          <th>status</th>
          <th className="text-center">Details</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {applications.map((application, index) => (
          <JobApplicationRow
            key={application._id}
            index={index}
            application={application}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default ApplicationsList
