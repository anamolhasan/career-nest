import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../page/home/Home";
import Register from "../page/Register/Register";
import SignIn from "../page/signIn/SignIn";



 export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component:Home
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