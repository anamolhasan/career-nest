import React from 'react'
import { Link, useLoaderData } from 'react-router'

const JobDetails = () => {
    const {
    _id, 
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_name,
    hr_email,
    company_logo,} = useLoaderData()
    // console.log(_id, title, company, deadline)
  return (
    <div className='m-10'>
        <div className="max-w-3xl mx-auto rounded-xl border border-gray-800 p-5 bg-[#0b0f19] text-gray-300">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-sm text-gray-400">
              {company} • {location}
            </p>
          </div>
        </div>

        <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400">
          {jobType}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-sm mt-4">
        <span className="px-3 py-1 rounded-full bg-gray-800">
          💼 {category}
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-800">
          💰 {salaryRange.min}-{salaryRange.max} {salaryRange.currency.toUpperCase()}
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-800">
          ⏰ {applicationDeadline}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-4 leading-relaxed">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-4">
        <h4 className="text-sm text-gray-400 mb-2">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {requirements.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-4">
        <h4 className="text-sm text-gray-400 mb-2">Responsibilities</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">
          <p>{hr_name}</p>
          <p>{hr_email}</p>
        </div>

        <Link to={`/jobApply/${_id}`}>
          <button className='btn btn-primary'>Apply Now</button>
        </Link>
      </div>
    </div>
        {/* <Link to={`/jobApply/${_id}`}>
          <button className='btn btn-primary'>Apply Now</button>
        </Link> */}
    </div>
  )
}

export default JobDetails