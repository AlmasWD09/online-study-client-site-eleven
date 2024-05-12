import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const{logIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

       
        // password validation
        // const uppercasePassword = /[A-Z]/;
        // const lowercasePassword = /[a-z]/;
        // const minLength = 6;
        // if(!uppercasePassword.test(password)){
        //    return toast.error("'Password must at least one uppercase letter")
        // }
        // if(!lowercasePassword.test(password)){
        //     return toast.error("'Password must at least one lowercase letter")
        // }
        // if(password.length < minLength){
        //     return toast.error("'Password must at least 6 characters ")
        // }
        
        // LogIn user
        logIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('Login Successfully!')
                e.target.reset()
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message);
                toast.error("password does not match");
            })
    }

    return (
        <div className="flex justify-center items-center px-8 lg:px-24 mt-10">
        <div className="w-full md:w-3/5 lg:w-1/3 mx-auto p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg ">
            <h1 className="text-xl font-bold text-center p-4">Please Login</h1>
            <form onSubmit={handleLogin}>
                <div className="">
                    <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="email" name="email" id="" placeholder="Email address" required />
                </div>
                <div className="relative">
                    <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0"

                        // Eye icon setup condition reandering
                        type={showPassword ? "text" : "password"} name="password" id="" placeholder="Password" required />
                    <p className="absolute top-6 right-3 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </p>

                </div>
                <div className="">
                    <button href="#_" type="submit" className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-primary active:shadow-none shadow-lg bg-gradient-to-tr from-primary to-primary border-primary text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full "></span>
                        <span className="relative">Continue</span>
                    </button>
                </div>
                <p className="px-4 py-2">Already Have an account? <Link to="/register" className="font-bold text-primary">Register</Link></p>
            </form>
            <SocialLogin />
        </div>
    </div>
    );
};

export default Login;