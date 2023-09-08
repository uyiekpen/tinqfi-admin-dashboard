import React from "react";
import { Button, Input } from "../components/ui";

const SignUp = () => {
  return (
    <div className="signIn">
      <div className="signIn-Card">
        <div className="form-holder">
          <p className="text-xl font-normal">Create an Account?</p>
          <h1 className="text-2xl font-bold">Sign In</h1>
          <form className="space-y-6">
            <div className="mt-1">
              <label
                htmlFor="password"
                className="block font-bold text-sm  text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your Name "
                className="input"
              />
            </div>

            <div className="mt-1">
              <label
                htmlFor="password"
                className="block font-bold text-sm  text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your Email "
                className="input"
              />
            </div>

            <div className="mt-1">
              <label
                htmlFor="password"
                className="block font-bold text-sm  text-gray-700"
              >
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your Password "
                className="input"
              />
            </div>

            <div className="mt-1">
              <label
                htmlFor="password"
                className="block font-bold text-sm  text-gray-700"
              >
                Confirm PassWord{" "}
              </label>
              <Input
                type="password"
                placeholder="Confirm your password"
                className="input"
              />
            </div>
            <div className="mt-1 flex justify-center items-center">
              <Button type="submit" className="button">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
