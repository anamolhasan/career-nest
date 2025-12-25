import React, { Suspense } from 'react'
import useAuth from '../../hooks/useAuth'
import JobLists from './JobLists'
import { jobsByCreatedByPromise } from '../../api/jobsApi'
import Loading from '../shared/Loading'

const MyPostedJobs = () => {
    const {user} = useAuth()
  return (
    <div>
        {/* <h2>My Posted Jobs:</h2> */}
        <Suspense fallback={<Loading />}>
             <JobLists 
             jobsByCreatedByPromise={jobsByCreatedByPromise(user.email)}
             />
        </Suspense>
    </div>
  )
}

export default MyPostedJobs