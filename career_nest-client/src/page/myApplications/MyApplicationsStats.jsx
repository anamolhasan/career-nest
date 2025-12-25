import React from 'react'
import useAuth from '../../hooks/useAuth'

const MyApplicationsStats = () => {
    const {user} = useAuth()
    console.log(user)
  return (
    <div className="max-w-6xl mx-auto p-6  rounded-2xl my-16">
  <div className="stats stats-vertical lg:stats-horizontal   rounded-2xl  flex gap-8 ">

    {/* Total Likes */}
    <div className="stat bg-black hover:bg-base-300 transition rounded-2xl">
      <div className="stat-figure text-primary">
        <div className="p-3 rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="stat-title">Total Likes</div>
      <div className="stat-value text-primary">25.6K</div>
      <div className="stat-desc text-success">
        ▲ 21% more than last month
      </div>
    </div>

    {/* Page Views */}
    <div className="stat bg-black hover:bg-base-300 transition rounded-2xl">
      <div className="stat-figure text-secondary">
        <div className="p-3 rounded-full bg-secondary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>
      <div className="stat-title">Page Views</div>
      <div className="stat-value text-secondary">2.6M</div>
      <div className="stat-desc text-success">
        ▲ 21% more than last month
      </div>
    </div>

    {/* Tasks */}
    <div className="stat bg-black hover:bg-base-300 transition rounded-2xl">
      <div className="stat-figure">
        <div className="avatar online">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt='user photo'/>
          </div>
        </div>
      </div>
      <div className="stat-title">Tasks Completed</div>
      <div className="stat-value">86%</div>
      <div className="stat-desc text-warning">
        31 tasks remaining
      </div>
    </div>

  </div>
</div>

  )
}

export default MyApplicationsStats