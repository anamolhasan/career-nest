import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../page/home/Home";
import Register from "../page/Register/Register";
import SignIn from "../page/signIn/SignIn";
import JobDetails from "../page/jobDetails/JobDetails";



 export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <h2>Route not found</h2>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'jobs/:id',
            element: <JobDetails />,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path:'register',
            Component:Register
        },
        {
            path:'signIn',
            Component:SignIn
        },
    ]
  },
]);