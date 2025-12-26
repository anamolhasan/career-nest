import React, { Suspense } from 'react'
import useAuth from '../../hooks/useAuth'
import JobLists from './JobLists'
// import { jobsCreatedByPromise } from '../../api/jobsApi'
import Loading from '../shared/Loading'
import useJobApi from '../../api/useJobApi'

const MyPostedJobs = () => {
    const {user} = useAuth()
    // console.log(user)
    const {jobsCreatedByPromise} = useJobApi()
  return (
    <div>
        {/* <h2>My Posted Jobs:</h2> */}
        <Suspense fallback={<Loading />}>
             <JobLists 
             jobsCreatedByPromise={jobsCreatedByPromise(user?.email)}
             />
        </Suspense>
    </div>
  )
}

export default MyPostedJobs