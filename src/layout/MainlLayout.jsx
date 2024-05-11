import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";


const MainlLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-313px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainlLayout;