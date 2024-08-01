import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <img
            className="mx-auto"
            src="https://iqonbd.com/wp-content/uploads/2020/11/cropped-Iqon-Blac-1-150x82.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-orange-600 hover:bg-orange-400 text-white font-bold mx-auto w-full py-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="text-end mt-2">
              Already have Account?
              <a className="pl-2 text-orange-600    " href="#">
                SignUp
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
