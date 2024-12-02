import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios" 
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
   const userInfo={
    fullname: data.fullname,
    email: data.email,
    password: data.password,
   }
  await axios.post('https://bookstoreapp-backend-gxmj.onrender.com/user/signup', userInfo)
   .then((res)=>{
    console.log(res.data)
    if( res.data){
     
      toast.success('Signup successful!');
    }
    localStorage.setItem("Users", JSON.stringify(res.data.user));
   }) .catch((err)=> {
    if (err.response)
    {
      console.log(err)
    
      toast.error("Error: " + err.response.data.message);
      
    }
   })
  }

  return (
    <div className="flex items-center justify-center pt-20">
      <div id="my_modal_3" className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg text-center">Signup</h3>

          {/* Name Field */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-1 rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email Field */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 rounded-md outline-none"
              {...register("password", { required: true, minLength: 6 })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.type === "required"
                  ? "This field is required"
                  : "Password must be at least 6 characters long"}
              </span>
            )}
          </div>

          {/* Submit Button and Login Redirect */}
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-orange-500 duration-300"
            >
              SignUp
            </button>
            <p>
              Have an Account?{" "}
              <Link to="/" className="underline text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
