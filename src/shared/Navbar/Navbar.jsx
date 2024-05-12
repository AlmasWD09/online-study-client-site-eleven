import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
    const {user,logOut} = useAuth()
    const navigate = useNavigate()

    const handleLogOut=()=>{
        logOut()
        navigate('/login')
    }
    return (
        <div className="bg-base-300 ">
            <div className="drawer max-w-7xl mx-auto px-8">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <Link to='/'><img src='https://i.ibb.co/G3JvLzd/navLogo.webp' alt="" /></Link>
                        <Link to='/' className="flex-1 text-lg md:text-3xl mr-3 font-semibold ">StudyCircle<span className="text-primary">Assign</span></Link>
                        <div className="flex items-center gap-4">
                            <div className="menu menu-horizontal lg:flex gap-8 hidden">
                                {/* Navbar menu content here */}
                                <NavLink
                                    to='/'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-primary font-semibold"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >Home
                                    {/* other code */}
                                </NavLink>
                                <NavLink
                                    to='/assignments'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-primary font-semibold"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >Assignments
                                    {/* other code */}
                                </NavLink>
                                <NavLink
                                    to='/create-assignments'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-primary font-semibold"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >Create Assignments
                                    {/* other code */}
                                </NavLink>
                                <NavLink
                                    to='/pending-assignments'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-primary font-semibold"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >Pending Assignments
                                    {/* other code */}
                                </NavLink>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link to='/register'><button className=" px-2 py-1 rounded hover:bg-primary hover:text-white">Register</button></Link>
                                {
                                    user?<div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                      <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt={user?.displayName} />
                                      </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                      <li><a>{user?.displayName}</a></li>
                                      <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                  </div>
                                  :
                                  <Link to='/login'><button className="px-2 py-1 rounded hover:bg-primary hover:text-white">Login</button></Link>
                                }
                                
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    {/* Content */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;