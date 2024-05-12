import { createBrowserRouter } from "react-router-dom";
import MainlLayout from "../layout/MainlLayout";
import Assignments from "../pages/Home/Assignments/Assignments";
import Home from "../pages/Home/Home";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivatRoute from "./PrivatRoute";


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
          element:<PrivatRoute>
            <CreateAssignments />
          </PrivatRoute>,
        
        },
        {
          path:'/pending-assignments',
          element:<PrivatRoute>
          <PendingAssignments />
        </PrivatRoute>
        
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