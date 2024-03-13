import App from "App";
import AuthLayout from "../layouts/AuthLayout";
// import AuthHeader from "components/Headers/AuthHeader";
// import NonAuthLayout from "layouts/NonAuthLayout";
// import Login from "pages/Auth/Login";
// import Signup from "pages/Auth/Signup";
// import { Projects } from "pages/projects";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Define your components
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

// Define the routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    // children: [
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    //   {
    //     path: "signup",
    //     element: <Signup />,
    //   },
    //   {
    //     path: "projects",
    //     element: <Projects />,
    //   },
    // ],
  },
  // {
  //   path: '/no-auth',
  //   element: <NonAuthLayout />,
  //   children:[
  //     {
  //       path: 'projects',
  //       element: <Projects />
  //     }
  //   ]
  // },
  // {
  //   path: 'projects',
  //   element: <Projects />,
  //   children: [
  //     {
  //       path: ':projectId',
  //       element: <Project />
  //     }
  //   ]
  // }
]);

// Render the application
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
