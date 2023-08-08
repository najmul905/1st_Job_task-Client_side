import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";
import Home from "../Page/Home";
import Neighbor from "../Page/Neighbor";
import AboutMe from "../Page/AboutMe";
import Details from "../Page/Details";

export const router = createBrowserRouter([
   
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"neighbor",
            element:<Neighbor></Neighbor>
        },
        {
            path:"aboutMe",
            element:<AboutMe></AboutMe>
        },
        {
            path:"details/:id",
            element:<Details></Details>
        },
        {
            path:"logIn",
            element:<Login></Login>
        },
        {
            path:"singUp",
            element:<SingUp></SingUp>
        },
      ]
    },

  ]);