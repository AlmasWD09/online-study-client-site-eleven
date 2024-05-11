import { createBrowserRouter } from "react-router-dom";
import MainlLayout from "../layout/MainlLayout";
import Assignments from "../pages/Home/Assignments/Assignments";
import Home from "../pages/Home/Home";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/assignments',
          element: <Assignments />,
        },
        {
          path:'/create-assignments',
          element:<CreateAssignments />
        },
        {
          path:'/pending-assignments',
          element:<PendingAssignments />,
        },
        {
          path:'/register',
          element:<Register />,
        },
        {
          path:'/login',
          element:<Login />,
        },
      ],
    },
  ]);
  export default router;