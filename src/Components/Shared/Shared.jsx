import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const Shared = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Shared;