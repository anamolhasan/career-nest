import React, { Suspense } from "react";
import ApplicationsList from "./ApplicationsList";
import MyApplicationsStats from "./MyApplicationsStats";
import Loading from "../shared/Loading";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";


const MyApplications = () => {
  const { user } = useAuth();

  // console.log('token firebase token', user.accessToken)
  return (
    <div>
      <MyApplicationsStats />
      <Suspense fallback={<Loading />}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(user?.email, user?.accessToken)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
