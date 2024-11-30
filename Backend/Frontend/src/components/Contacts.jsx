import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Debugging: Log form data
  };

  return (
    <>
      <div className="pt-20">
        <div className="flex items-center justify-center pt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Cloes button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-center text-3xl text-gray-800 pb-3">Contact Us</h3>
           <div className="border border-2px border-gray-500 rounded-lg p-5">
           <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-1 rounded-md outline-none bg-white border border-1px border-gray-800"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 rounded-md outline-none bg-white border border-1px border-gray-800"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                id="message"
                name="message"
                {...register("message", { required: true })}
                rows="4"
                className="mt-1 p-2 rounded-md outline-none bg-white border border-1px border-gray-800 w-full"
                placeholder="Enter Your Message"
              ></textarea>

              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-orange-500 duration-300"
              >
                Submit
              </button>
            </div>
           </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
