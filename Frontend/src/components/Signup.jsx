// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Form Data:", data); // Log submitted form data
  };

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
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
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
