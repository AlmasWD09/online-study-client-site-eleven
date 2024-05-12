import { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {  updateProfile } from "firebase/auth";


const Register = () => {
    const { creatUser,user,setUser } = useAuth();
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
   
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


          // password validation
        //   const uppercasePassword = /[A-Z]/;
        //   const lowercasePassword = /[a-z]/;
        //   const minLength = 6;
        //   if(!uppercasePassword.test(password)){
        //      return toast.error("'Password must at least one uppercase letter")
        //   }
        //   if(!lowercasePassword.test(password)){
        //       return toast.error("'Password must at least one lowercase letter")
        //   }
        //   if(password.length < minLength){
        //       return toast.error("'Password must at least 6 characters ")
        //   }

        // Created User and updateUser
        creatUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('creatUser Successfully');
                e.target.reset()
                navigate('/login')
                // Update profile
                updateProfile(name,photo)
                setUser({...user,photoURL:photo,displayName:name})
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })


    }
    return (
        <div className=" flex justify-center items-center px-8 lg:px-24 my-10">
        <div className="w-full md:w-3/5 lg:w-1/3 mx-auto p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <h1 className="text-2xl font-semibold text-center p-4">Please   Register</h1>
            <form onSubmit={handleRegister}>
                <div className="">
                    <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name" id="" placeholder="User name" required />
                </div>
                <div className="">
                    <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="photo" name="photo" id="" placeholder="Photo URL" />
                </div>
                <div className="">
                    <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="email" name="email" id="" placeholder="Email address" required />
                </div>
                <div className="relative">
                    <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" 
                    
                     // Eye icon setup condition reandering
                    type={showPassword?"text":"password"} name="password" id="" placeholder="Password" required />
                    <p className="absolute top-6 right-3 cursor-pointer" 
                    onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword?<IoEyeOutline />:<IoEyeOffOutline />}
                    </p>
                </div>
                <div className="">
                    <button href="#_" type="submit" className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-primary active:shadow-none shadow-lg bg-gradient-to-tr from-primary to-primary border-primary text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full"></span>
                        <span className="relative">Continue</span>
                    </button>
                </div>
                <p className="px-4 py-2">Do not Have an account? <Link to="/login" className="font-bold text-primary">Login</Link></p>
            </form>
        </div>
    </div>
    );
};

export default Register;