import React from "react";
import SignInImage from "../../assets/registration/Frame.png";
import SignInImageBg from "../../assets/registration/Frame2.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen lg:flex">
      {/* 1st div */}
      <div className="bg-teal-950 lg:w-1/2 relative ">
        <div className="absolute top-0 right-0">
          <img src={SignInImageBg} alt="" />
        </div>
        <img className="mx-auto pt-56 pb-16 px-14" src={SignInImage} alt="" />
      </div>

      {/* 2nd div */}
      <div className="mx-auto flex justify-center items-center">
        <form className="card-body border rounded-xl ">
          <h3 className="text-center text-3xl font-bold mb-12">
            Sign in to Doc House
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Username or Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your username or email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#F7A582] text-white">Login</button>
          </div>

          <p className="text-[#6C6B6B] text-center text-lg font-normal mt-7 mb-8">
           Please register at first.Go to
            <span className="text-[#F7A582] font-bold">
              <Link to="/signIn">SIGN IN</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;