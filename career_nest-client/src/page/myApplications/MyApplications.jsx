import React, { Suspense } from "react";
import ApplicationsList from "./ApplicationsList";
import MyApplicationsStats from "./MyApplicationsStats";
import Loading from "../shared/Loading";
import useAuth from "../../hooks/useAuth";
// import { myApplicationsPromise } from "../../api/applicationsApi";
import useApplicationsApi from "../../api/useApplicationsApi";


const MyApplications = () => {
  const { user } = useAuth();

  const {myApplicationsPromise} = useApplicationsApi()
  // console.log('token firebase token', user.accessToken)
  return (
    <div>
      <MyApplicationsStats />
      <Suspense fallback={<Loading />}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(user?.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
