import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../page/home/Home";
import Register from "../page/Register/Register";
import SignIn from "../page/signIn/SignIn";
import JobDetails from "../page/jobDetails/JobDetails";
import JobApply from "../page/JobApply/JobApply";
import MyApplications from "../page/myApplications/MyApplications";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../page/addJob/AddJob";
import MyPostedJobs from "../page/myPostedJobs/MyPostedJobs";
import ViewApplications from "../page/viewApplications/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`https://career-nest-server-psi.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs/>
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications/>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://career-nest-server-psi.vercel.app/applications/job/${params.job_id}`)
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ],
  },
]);
