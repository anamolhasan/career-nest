import React from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'

const JobApply = () => {
    const {id:jobId} = useParams()
    const {user} = useAuth()
    const navigate = useNavigate()


    const handleApplyFormSubmit = e => {
      e.preventDefault()
      const form = e.target
      const linkedIn = form.linkedIn.value
      const github = form.github.value
      const resume = form.resume.value

      console.log(linkedIn,github, resume)

      const application = {
        jobId,
        applicant: user.email,
        linkedIn,
        github,
        resume
      }

      axios.post('https://career-nest-server-psi.vercel.app/applications', application)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-applications')
                }
      })
      .catch(err => {
        console.log(err)
      })
    }
  return (
    <div className="max-w-xl mx-auto my-20 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#0b0f19] to-[#111827] p-8 shadow-2xl">

  {/* Header */}
  <div className="mb-6 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-white">
      Apply for This Job
      <Link
        to={`/jobs/${jobId}`}
        className="ml-2 text-indigo-400 hover:text-indigo-300 text-base underline underline-offset-4"
      >
        (View Job)
      </Link>
    </h1>
    <p className="mt-2 text-gray-400">
      Submit your profile links and best of luck 🚀
    </p>
  </div>

  {/* Form */}
  <form className="space-y-5" onSubmit={handleApplyFormSubmit}>

    {/* LinkedIn */}
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-gray-300">LinkedIn Profile</span>
      </label>
      <input
        type="url"
        name="linkedIn"
        placeholder="https://linkedin.com/in/yourname"
        className="input input-bordered w-full bg-[#0b0f19] border-gray-700 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
        required
      />
    </div>

    {/* GitHub */}
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-gray-300">GitHub Profile</span>
      </label>
      <input
        type="url"
        name="github"
        placeholder="https://github.com/yourusername"
        className="input input-bordered w-full bg-[#0b0f19] border-gray-700 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
        required
      />
    </div>

    {/* Resume */}
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-gray-300">Resume Link</span>
      </label>
      <input
        type="url"
        name="resume"
        placeholder="https://drive.google.com/..."
        className="input input-bordered w-full bg-[#0b0f19] border-gray-700 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
        required
      />
    </div>

    {/* Button */}
    <div className="pt-6">
      <button className="btn w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold tracking-wide transition">
        Apply Now
      </button>
    </div>
  </form>
</div>



  )
}

export default JobApply