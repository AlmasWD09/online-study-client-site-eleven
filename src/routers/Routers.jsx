import { createBrowserRouter } from "react-router-dom";
import MainlLayout from "../layout/MainlLayout";
import Assignments from "../pages/Home/Assignments/Assignments";
import Home from "../pages/Home/Home";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivatRoute from "./PrivatRoute";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import MySubmitedAssignment from "../pages/MySubmitedAssignment/MySubmitedAssignment";
import AssignmentSubmitForm from "../pages/AssignmentSubmitForm/AssignmentSubmitForm";
import NotFound from "../pages/NotFound/NotFound";
import AssignmentUpdate from "../pages/AssignmentUpdate/AssignmentUpdate";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlLayout />,
      errorElement:<NotFound />,
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
          path:'/assignment-update/:id',
          element:<AssignmentUpdate />,
          loader:({params})=>fetch(` ${import.meta.env.VITE_API_URL}/assignment/api/get/${params.id}`)
        },
        {
          path:'/pending-assignments',
          element:<PrivatRoute>
          <PendingAssignments />
        </PrivatRoute>
        
        },
        {
          path:'/assignment-details/:id',
          element:<PrivatRoute>
            <AssignmentDetails />
          </PrivatRoute>,
        },
        {
          path:'assignment-submit-form',
          element:<AssignmentSubmitForm />,
        },
        {
          path:'/my-submit-assignments',
          element:<PrivatRoute>
            <MySubmitedAssignment />
          </PrivatRoute>,
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