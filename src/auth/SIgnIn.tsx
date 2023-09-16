import React from "react";
import { Button, Input, Label, Form } from "../components/ui";

const SIgnIn = () => {
  return (
    <div className="signIn">
      <div className="signIn-Card">
        <div className="form-holder">
          <p className="text-xl font-normal">Create an Account?</p>
          <h1 className="text-2xl font-bold">Sign In</h1>
          <Form className="space-y-6">
            <div className="mt-1">
              <Label
                htmlFor="password"
                className="block font-bold text-sm  text-gray-700"
              >
                Email
              </Label>
              <Input
                type="email"
                placeholder="Enter your Email "
                className="input"
              />
            </div>

            <div className="mt-1">
              <Label
                htmlFor="password"
                className="block font-bold text-sm  text-gray-700"
              >
                Password
              </Label>
              <Input
                type="password"
                placeholder="Enter your Password "
                className="input"
              />
            </div>

            <div className="mt-1 flex justify-center items-center">
              <Button type="submit" className="button">
                Sign In
              </Button>
            </div>
          </Form>
          <div className="mt-2 flex justify-center items-center">
            I Dont have an account? <span className="text-tinqfiYellow capitalize"> sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
