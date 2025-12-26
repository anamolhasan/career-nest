import React from 'react'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'

function AddJob() {
    const {user} = useAuth()
    console.log(user)

    const handleAddAJob = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        // process salary range data
        const {min, max, currency, ...newJob} = data
        newJob.salaryRange = {min, max, currency}

        // process requirements
        const requirementsString = newJob.requirements
        const requirementsDirty = requirementsString.split(',')
        const requirementsClean = requirementsDirty.map(req => req.trim())
        newJob.requirements = requirementsClean

        // process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(req=>req.trim())

        newJob.status = 'active'


        // save job to the database
        axios.post('https://career-nest-server-psi.vercel.app/jobs', newJob)
           .then(res => {
             if(res.data.insertedId){
                Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "This new Job has been saved and published.",
                        showConfirmButton: false,
                        timer: 1500
                    });
             }
           })
           .catch(err => {
            console.log(err)
           })

        // console.log(data)
        // console.log(newJob)
    }
  return (
    <div className="max-w-5xl mx-auto p-6">
  <div className="card bg-black shadow-xl">
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center mb-6">
        🚀 Add a New Job
      </h2>

      <form onSubmit={handleAddAJob} className="space-y-6">

        {/* Basic Info */}
        <fieldset className="border rounded-xl p-5">
          <legend className="px-3 text-lg font-semibold">Basic Information</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Job Title</label>
              <input type="text" name="title" className="input input-bordered w-full" placeholder="Frontend Developer" />
            </div>

            <div>
              <label className="label">Company Name</label>
              <input type="text" name="company" className="input input-bordered w-full" placeholder="Career Nest" />
            </div>

            <div>
              <label className="label">Location</label>
              <input type="text" name="location" className="input input-bordered w-full" placeholder="Dhaka, Bangladesh" />
            </div>

            <div>
              <label className="label">Company Logo URL</label>
              <input type="text" name="company_logo" className="input input-bordered w-full" placeholder="https://logo.png" />
            </div>
          </div>
        </fieldset>

        {/* Job Type & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <fieldset className="border rounded-xl p-5">
            <legend className="px-3 text-lg font-semibold">Job Type</legend>
            <div className="flex flex-wrap gap-3 mt-2">
              <input className="btn btn-outline" type="radio" name="jobType" value="On-Site" aria-label="On-Site" />
              <input className="btn btn-outline" type="radio" name="jobType" value="Remote" aria-label="Remote" />
              <input className="btn btn-outline" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
            </div>
          </fieldset>

          <fieldset className="border rounded-xl p-5">
            <legend className="px-3 text-lg font-semibold">Job Category</legend>
            <select name="category" className="select select-bordered w-full mt-2">
              <option disabled selected>Choose Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </fieldset>
        </div>

        {/* Deadline & Salary */}
        <fieldset className="border rounded-xl p-5">
          <legend className="px-3 text-lg font-semibold">Deadline & Salary</legend>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="date" name="deadline" className="input input-bordered w-full" />

            <input type="text" name="min" className="input input-bordered w-full" placeholder="Min Salary" />

            <input type="text" name="max" className="input input-bordered w-full" placeholder="Max Salary" />

            <select name="currency" className="select select-bordered w-full">
              <option disabled selected>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="border rounded-xl p-5">
          <legend className="px-3 text-lg font-semibold">Job Description</legend>
          <textarea name="description" className="textarea textarea-bordered w-full" rows="3" placeholder="Describe the job..."></textarea>
        </fieldset>

        {/* Requirements & Responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="border rounded-xl p-5">
            <legend className="px-3 text-lg font-semibold">Requirements</legend>
            <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder="HTML, CSS, React"></textarea>
          </fieldset>

          <fieldset className="border rounded-xl p-5">
            <legend className="px-3 text-lg font-semibold">Responsibilities</legend>
            <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder="Develop UI, Fix bugs"></textarea>
          </fieldset>
        </div>

        {/* HR Info */}
        <fieldset className="border rounded-xl p-5">
          <legend className="px-3 text-lg font-semibold">HR Information</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="hr_name" defaultValue={user.displayName} className="input input-bordered w-full" placeholder="HR Name" />

            <input type="email" name="hr_email" defaultValue={user.email} className="input input-bordered w-full" />
          </div>
        </fieldset>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-wide">
            Add Job 🚀
          </button>
        </div>

      </form>
    </div>
  </div>
</div>

  )
}

export default AddJob